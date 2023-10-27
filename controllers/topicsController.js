// import topicsModel from topics model.js
import * as topicsModel from "../models/topicsModel.js";

// create getTopics function which calls get topics and has response status
export async function getTopics(req, res) {
  // store getTopics function in topics variable
  const topics = await topicsModel.getTopics();
  // console.log(topics);
  // response status and body for get topics
  res.status(200).json({ status: "success", data: topics });
}

// create addTopics function
export async function createTopic(req, res) {
  const somethingIsMissing =
    req.body.topic === undefined || req.body.content === undefined;
  // req.body.added_date === undefined;
  // if something is missing -error handling
  if (somethingIsMissing) {
    res.status(400).json({
      success: false,
      error: "Please provide a valid 'topic', 'content' or 'Date'",
    });
    return;
  }
  // store input data in avariable
  const input = req.body;
  // store createTopic function to a varable
  const newTopic = await topicsModel.createTopic(input);
  // response status set to 201 and JSend for body
  res.status(201).json({ status: "success", data: newTopic });
}

// delete topics function
export async function deleteTopicById(req, res) {
  // store the request id in an id variable
  const id = req.params.id;

  // store delete topic function from topics model in a topic variable
  const topic = await topicsModel.deleteTopicById(id);
  // Flag 404 if the id and status are not found
  if (!topic) {
    return res.status(404).json({ success: false, error: "Topic not found" });
  }
  // return status 200 and success if found
  res.status(200).json({ status: "success", data: topic });
}
