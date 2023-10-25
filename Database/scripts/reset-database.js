// import pool from pg in index.js
import { pool } from "../index.js";

// create async function which resets the database
async function resetDatabase() {
  try {
    // drop table if exists
    await pool.query(`DROP TABLE IF EXISTS topics CASCADE;`);
  } catch (error) {
    //log the error
    console.error("Database reset failed: ", error);
  } finally {
    // end the pool
    await pool.end();
  }
}
