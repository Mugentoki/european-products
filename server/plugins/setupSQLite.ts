import fs from "fs";
import chalk from "chalk";
import { dbPath, initializeDatabase } from "../db";

export default defineNitroPlugin(async () => {
    try {
        fs.unlinkSync(dbPath);
    } catch (e) {
        console.log('Error deleting database', e);
    }

    await initializeDatabase();
    console.log(chalk.green('✔') + ' Database ready');
})