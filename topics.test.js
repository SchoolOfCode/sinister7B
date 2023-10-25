//import vitest
import { test, expect } from "vitest";
//import request from supertest
import request from "supertest";
//import app from app.js
import app from "./app.js";
// import resetdatabase
import { resetDatabase } from "./Database/helper.js";

// Test endpoint: getTopics
test("GET /topics works", async function () {
  //call the reset function
  await resetDatabase();

  // call the request and pass in the express app
  const response = await request(app).get("/topics");

  // store the response body in a responseBody variable
  const responseBody = response.body;
  console.log(responseBody);

  // check that the data matches what is expected
  responseBody.data.forEach((responseBody) => {
    //id to be a number
    expect(responseBody.id).toBeTypeOf("number");
    //topic to be a number
    expect(responseBody.topic).toBeTypeOf("string");
    //content to be a number
    expect(responseBody.content).toBeTypeOf("string");
    //added_date to be a number
    expect(responseBody.added_date).toBeTypeOf("string");
    // expect status to be 200
    expect(response.status).toBe(200);
    // expect headers to match application/json
    expect(response.headers["content-type"]).toMatch("application/json");
  });
});
