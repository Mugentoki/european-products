import fs from "fs";
import chalk from "chalk";
import { dbPath, initializeDatabase } from "../db";

export default defineNitroPlugin((nitroApp) => {
    try {
        fs.unlinkSync(dbPath);
    } catch (e) {
        console.log('Error deleting database', e);
    }

    const db = initializeDatabase();
    db.then((db) => {
        console.log(chalk.green('✔') + ' Database ready');
    })
})