import fs from "fs";
import path from "path";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

import type { Database } from "sqlite";	
import type { Country, Product } from "~/types";

export const dbPath: string = "./data.db";

export async function getDatabase(): Promise<Database> {
  return await open({
    filename: path.resolve(dbPath),
    driver: sqlite3.Database,
  });
}

export async function initializeDatabase(): Promise<Database> {
  const db: Database = await open({
    filename: path.resolve(dbPath),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS countries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      alpha2 TEXT,
      memberships TEXT
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      company TEXT,
      country TEXT,
      description TEXT,
      category TEXT,
      website TEXT,
      alternatives TEXT
    );
  `);

  // Load JSON files
  const categoriesDir: string = path.resolve("./data/categories");
  const productFiles: string[] = fs.readdirSync(categoriesDir);
  const countriesFile: string = path.resolve("./data/countries/countries.json");
  const countries: Country[] = JSON.parse(fs.readFileSync(countriesFile, "utf-8")) as Country[];

  for (const file of productFiles) {
    const category: string = path.basename(file, ".json");
    const filePath: string = path.join(categoriesDir, file);
    const rawData: Product[] = JSON.parse(fs.readFileSync(filePath, "utf-8")) as Product[];

    for (const product of rawData) {
      const { name, company, country, description, website, alternatives } = product;
      await db.run(
        "INSERT INTO products (name, company, country, description, category, website, alternatives) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name, company, country, description, category, website, JSON.stringify(alternatives)]
      );
    }
  }

  for (const country of countries) {
    const { name, alpha2, memberships } = country;
    await db.run(
      "INSERT INTO countries (name, alpha2, memberships) VALUES (?, ?, ?)",
      [name, alpha2, JSON.stringify(memberships)]
    );
  }

  return db;
}