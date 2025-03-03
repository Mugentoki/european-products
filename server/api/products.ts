import { defineEventHandler, getQuery } from "h3";
import { initializeDatabase, getDatabase } from "../db";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const search = query.q as string;

  const db = await getDatabase();
  // const db = await initializeDatabase();

  let products;
  if (search) {
    products = await db.all("SELECT * FROM products WHERE name LIKE ?", [`%${search}%`]);
  } else {
    products = await db.all("SELECT * FROM products");
  }

  return { products };
});
