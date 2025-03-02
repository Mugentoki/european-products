import fs from "fs";
import path from "path";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const dbFile = path.resolve("./data.db");

async function initializeDatabase() {
  const db = await open({
    filename: dbFile,
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      company TEXT,
      origin TEXT,
      description TEXT,
      category TEXT,
      website TEXT,
      alternatives TEXT
    );

    CREATE TABLE IF NOT EXISTS countries (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      alpha2 TEXT,
      memberships TEXT
    );
  `);

  // Load JSON files
  const categoriesDir = path.resolve("./data/categories");
  const productFiles = fs.readdirSync(categoriesDir);
  const countriesFile = path.resolve("./data/countries/countries.json");
  const countries = JSON.parse(fs.readFileSync(countriesFile, "utf-8"));

  for (const file of productFiles) {
    const category = path.basename(file, ".json");
    const filePath = path.join(categoriesDir, file);
    const rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    for (const product of rawData) {
      const { name, company, origin, description, website, alternatives } = product;
      const { lastID } = await db.run(
        "INSERT INTO products (name, company, origin, description, category, website, alternatives) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [name, company, origin, description, category, website, JSON.stringify(alternatives)]
      );
    }
  }

  for (const country of countries) {
    const { name, alpha2, memberships } = country;
    const { lastID } = await db.run(
      "INSERT INTO countries (name, alpha2, memberships) VALUES (?, ?, ?)",
      [name, alpha2, JSON.stringify(memberships)]
    );
  }

  return db;
}

export default initializeDatabase;
