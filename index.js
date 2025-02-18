import express from "express";
import mongoose from "mongoose";

import  todoHandaler  from "./router.js";

const app = express();
app.use(express.json());

// Connect with MongoDB local database
mongoose
  .connect("mongodb://127.0.0.1:27017/todo")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

// Application todo
app.use("/todo", todoHandaler);

// Default error handler
function errorHandaler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({ error: err.message });
}

app.use(errorHandaler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
