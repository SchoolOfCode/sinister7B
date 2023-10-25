// Import express
import express from "express";

// Import controller from topicController file
import * as topicsController from "../controllers/topicsController.js";

// store routes in topicsRoutes
export const topicsRoutes = express.Router();

// GET route
topicsRoutes.get("/topics", topicsController.getTopics);
// POST route
topicsRoutes.post("/topics", topicsController.createTopic);
//DELETE route
topicsRoutes.delete("/topics/:id", topicsController.deleteTopicById);