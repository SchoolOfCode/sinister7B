// import pg (node postgres) from "pg";
import pg from "pg";

// Retrieve the database connection string from the environment variables
const connectionString = process.env.DB_CONNECTION;

// check if the connection string is not defined, if so throw an error
if (!connectionString) {
    throw new Error(
        "No DE_CONNECTION defined. Did you load in your env variables?"
    );
}

// Export a new instance of pg.pool
export const pool = new pg.Pool({
    // Pass the connection string to the pool
    connectionString,
});