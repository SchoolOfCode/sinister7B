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
  //   console.log(responseBody);

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

// Test endpoint: createTopics
test("POST /topics works", async function () {
  // call the rest database
  await resetDatabase();

  // call the request and pass in the express app
  const response = await request(app)
    .post("/topics")
    .send({
      topic: "array",
      content: "a group of item",
      added_date: "2023-10-30",
    })
    .set("content-type", "application/json");

  // store response body in variable
  const responseBody = response.body;
  // console.log(response.body)

  // assert the response status
  expect(response.status).toBe(201);

  // assert response body to be expected
  expect(responseBody).toEqual({
    status: "success",
    data: {
      id: 7,
      topic: "array",
      content: "a group of item",
      added_date: "2023-10-30T00:00:00.000Z",
    },
  });

  // assert the response header
  expect(response.header["content-type"]).toMatch(/json/);
});

// Test the delete from api
test("DELETE /topics by id works", async function () {
  //call reset database
  await resetDatabase();
  // call request and pass in the express app
  const response = await request(app).delete("/topics/3");
  // store response body in a variable
  const responseBody = await response.body;
  // assert the body is an object
  expect(responseBody).toBeTypeOf("object");
  // assert that the status is 200
  expect(response.status).toBe(200);
  // assert that the header is application/json
  expect(response.header["content-type"]).toBe(
    "application/json; charset=utf-8"
  );
});

// test POST invalid request
test("POST /topics invalid req works", async function () {
  // call reset database
  await resetDatabase();
  // call request and pass in the express app
  const response = await request(app)
    .post("/topics")
    .send({
      tpic: "array",
      content: "A string",
      added_date: "2023-10-25",
    })
    .set("Accept", "application/json");
  // store response.body in responseBody
  const responseBody = await response.body;
  // Assert the response body is an object
  expect(typeof responseBody).toBe("object");
  //Assert the status code is 400
  expect(response.status).toBe(400);
  // asssert the user sucess is false
  expect(responseBody.success).toBe(false);

  // expect header to be application/json
  expect(response.header["content-type"]).toBe(
    "application/json; charset=utf-8"
  );

  // expect the error body message
  expect(responseBody.error).toBe(
    "Please provide a valid 'topic', 'content' or 'Date'"
  );
  console.log(responseBody);
});


// test DELETE is invalid
test("DELETE /topics/id is invalid", async function () {
  // call to reset database
  await resetDatabase();
  // call request and pass in the express app
  const noId = 99;
  const response = await request(app).delete(`/topics/${noId}`);
  // store response body
  const responseBody = await response.body;
  // assert the type of body is object
  expect(typeof responseBody).toBe("object");
  // assert success to be false
  expect(responseBody.success).toBe(false);
  // assert status to be 404
  expect(response.status).toBe(404);
  //assert error message is as expected
  expect(responseBody.error).toBe("Topic not found");
  //assert header
  expect(response.header["content-type"]).toBe("application/json; charset=utf-8");
})