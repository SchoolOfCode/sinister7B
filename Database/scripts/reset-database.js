// import pool from pg in index.js
import { pool } from "../index.js";

// Import reset database function from helper.js
import { resetDatabase } from "../helper.js";


try {
  // call the reset database function
  await resetDatabase()
  } catch (error) {
    //log the error
    console.error("Database reset failed: ", error);
  } finally {
    // end the pool
    await pool.end();
  }
