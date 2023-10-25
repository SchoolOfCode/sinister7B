// import pg (node postgres) from "pg";
import pg from "pg";

// Retrieve the database connection string from the environment variables
const connectionString = process.env.DB_CONNECTION;

// check if the connection string is not defined, if so throw an error
