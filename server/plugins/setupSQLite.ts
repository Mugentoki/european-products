import fs from "fs";
import { dbPath, initializeDatabase } from "../db";

export default defineNitroPlugin((nitroApp) => {
    try {
        console.log('unlink');
        fs.unlinkSync(dbPath);
    } catch (e) {
        console.log('Error deleting database', e);
    }

    console.log('set up db');
    const db = initializeDatabase();
    db.then((db) => {
        console.log('db ready', db);
    })
})