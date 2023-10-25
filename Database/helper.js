// import pool from pg in index.js
import { pool } from "./index.js";

// create async function which resets the database
export async function resetDatabase() {
    // drop table if exists
    await pool.query(`DROP TABLE IF EXISTS topics CASCADE;`);
  
    // Create the table
    await pool.query(`
    CREATE TABLE topics (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      topic VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      added_date DATE NOT NULL
    ); 
    `);
  
    // Seed the topics table
    await pool.query(`
    INSERT INTO topics (topic, content, added_date)
    VALUES
    ('splice', 'The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.', '2023-10-25'),
    ('map', 'The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.', '2023-10-24'),
    ('join', 'The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.', '2023-10-25');
    `);
  
    console.log("Database reset successful");
  };