// Import express
import express from "express";

// Import controller from topicController file
import * as topicsController from "../controllers/topicsController.js";

// store routes in topicsRoutes
export const topicsRoutes = express.Router();

// GET route
topicsRoutes.get("/", topicsController.getTopics);
// POST route
topicsRoutes.post("/", topicsController.createTopic);
//DELETE route
topicsRoutes.delete("/:id", topicsController.deleteTopicById);
