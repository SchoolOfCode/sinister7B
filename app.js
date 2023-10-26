// import express
import express from "express";

//import morgan
import morgan from "morgan";

//import routes from routes handler files???
import { topicsRoutes } from "./routes/topicRoutes.js";

//export const app will be set as default
const app = express();
//import cors from cors
import cors from "cors";
//use app (morgan,express.json, ???.Routes, )
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/topics", topicsRoutes);

//    error handling
// Error handler for incorrect filepath
app.use(function (_req, res, _next) {
  res.status(404).json({
    success: false,
    error:
      "We couldn't find what you were looking for 😞. Did you send the request to the right path?",
  });
});

export default app;
