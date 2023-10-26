//import the pool object so our helper functions can interact with the PostgreSQL database
import { pool } from "../Database/index.js";

// Get topics function from the databse using SELECT
export async function getTopics() {
  // Define the SQL query to fetch all topics from the topics table
  const queryText = "SELECT * FROM topics ORDER BY added_date DESC;";

  // Send query to database using query text
  const data = await pool.query(queryText);
  console.log(data.rows);
  // return the rows from data
  return data.rows;
}

// Query the database to create a topic and return the newly created topic
export async function createTopic(newTopic) {
  // Defining the sql query for the creation of the new topic
  const queryText = `INSERT INTO topics (topic, content, added_date) VALUES ($1, $2, $3) RETURNING *;`;

  // Sending query to the database using the pool object and parameterise the query to prevent injection
  const data = await pool.query(queryText, [
    newTopic.topic,
    newTopic.content,
    newTopic.added_date,
  ]);

  //Return the rows property of the insert record
  return data.rows[0];
}

// Query the database using the topic ID to delete the specified topic
export async function deleteTopicById(id) {
  // Defining the sql query for the deleting of a specific topic from the topics table
  const queryText = `DELETE FROM topics WHERE id = $1 RETURNING *;`;

  //Sending the query to the database using pool object and parameterise the query to prevent injection
  const data = await pool.query(queryText, [id]);

  // Return the rows property of the deleted record
  return data.rows[0] || null;
}
