import { defineEventHandler, getQuery } from "h3";
import { getDatabase } from "../db";

import type { Database } from "sqlite";
import type { QueryObject } from "ufo";

export type Product = {
  name: string;
  company: string;
  origin: string;
  description: string;
  category: string;
  website: string;
  alternatives: Product[] | string;
};

export default defineEventHandler(async (event) => {
  const query: QueryObject = getQuery(event);
  const search: string = query.q as string;
  const db: Database = await getDatabase();
  const products: Product[] = await getSearchedProducts(db, search);

  if (!products.length) return { products };

  for await (const product of products) {
    if (typeof product.alternatives === "string") {
      product.alternatives = await getAlternatives(db, product.alternatives);
    }
  }

  return { products };
});

async function getSearchedProducts(db: Database, search: string): Promise<Product[]> {
  let products = [];
  
  if (search) {
    products = await db.all("SELECT name, company, origin, description, category, website, alternatives FROM products WHERE name LIKE ?", [`%${search}%`]);
  }

  return products;
}

async function getAlternatives(db: Database, alternatives: string): Promise<Product[]> {
  const alternativesArray: string[] = JSON.parse(alternatives) as string[];
  const alternativesObjects: Product[] = await db.all(
    "SELECT name, company, origin, description, category, website, alternatives FROM products WHERE name IN (" + alternativesArray.map(() => "?").join(", ") + ")",
    alternativesArray
  );
  
  return alternativesObjects
}