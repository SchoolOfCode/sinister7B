//import vitest
import { test, expect } from "vitest";
//import request from supertest
import request from "supertest";
//import app from app.js
import app from "./app.js";
// import resetdatabase
import { resetDatabase } from "./Database/scripts/reset-database.js";

// Test endpoint: getTopics
test("GET /topics works", async function () {
  //call the reset function
  await resetDatabase([
    { task: "Walk the dog", completion_date: "1999-01-08" },
    { task: "Feed the computer", completion_date: "2015-01-10" },
]);
});
