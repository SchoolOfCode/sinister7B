// import topicsModel from topics model.js
import * as topicsModel from "../models/topicsModel.js";

// create getTopics function which calls get topics and has response status
export async function getTopics(req, res) {
  // store getTopics function in topics variable
  const topics = await topicsModel.getTopics();
  // response status and body for get topics
  res.status(200).json({ status: "success", data: topics });
}
