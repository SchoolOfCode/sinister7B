// import topicsModel from topics model.js
import * as topicsModel from "../models/topicsModel.js";

// create getTopics function which calls get topics and has response status
export async function getTopics(req, res) {
  // store getTopics function in topics variable
  const topics = await topicsModel.getTopics();
  // response status and body for get topics
  res.status(200).json({ status: "success", data: topics });
}


// create addTopics function
export async function createTopic(req, res) {
  // store input data in avariable
  const input = req.body;
  // store createTopic function to a varable
  const newTopic = await topicsModel.createTopic(input);
  // response status set to 201 and JSend for body
  res.status(201).json({ status: "success", data: newTopic });
}
