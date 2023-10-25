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
    expect(responseBody.id).toBeTypeOf("number");
  });
});
