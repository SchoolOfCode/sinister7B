// Import express
import express from "express";

// Import controller from topicController file
import * as topicsController from "../controllers/topicsController.js";

export const topicsRoutes = express.Router();

topicsRoutes.get("/topics", topicsController.getTopics);
topicsRoutes.post("/topics", topicsController.createTopic);
topicsRoutes.delete("/topics/:id", topicsController.deleteTopicById);