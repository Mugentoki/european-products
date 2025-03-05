import { defineEventHandler, getQuery } from "h3";
import { getDatabase } from "../db";

import type { Database } from "sqlite";
import type { QueryObject } from "ufo";
import type { Product } from "~/types";

export default defineEventHandler(async (event) => {
  const query: QueryObject = getQuery(event);
  const search: string = query.q as string;
  const db: Database = await getDatabase();
  const products: Product[] = await getSearchedProducts(db, search);

  return { products };
});

async function getSearchedProducts(db: Database, search: string): Promise<Product[]> {
  let products = [];
  
  if (search) {
    products = await db.all(
          `SELECT 
      products.id, 
      products.name, 
      products.company, 
      products.country, 
      JSON_OBJECT(
          'country_id', countries.id,
          'country_name', countries.name,
          'country_code', countries.alpha2,
          'country_memberships', countries.memberships
      ) AS country, 
      products.description, 
      products.category, 
      products.website, 
      products.alternatives
  FROM 
      products 
  JOIN 
      countries ON products.country = countries.alpha2 
  WHERE 
      products.name LIKE ?`,
          [`%${search}%`]
      );
  }

  products = products.map((product) => {
    product.country = JSON.parse(product.country);
    product.alternatives = JSON.parse(product.alternatives);
    return product;
  });

  return products;
}