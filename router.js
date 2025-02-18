import express from "express";
import mongoose from "mongoose";
import todoSchema from "./sehcma.js";
const router = express.Router();

const Todo = new mongoose.model("Todo", todoSchema);
//Get All todo
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    const titles = todos.map(todo => todo.title);
    res.status(200).json({ message: "Todos fetched successfully", titles });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

//Get todo by id
router.get("/:id", async (req, res) => {});
//Post Todo
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save();
    res.status(201).json({ message: "Todo successfully added", todo: newTodo });
  } catch (err) {
    res.status(500).json({ error: "Failed to save data" });
  }
});
//Post Multipul tod
router.post("/all", async (req, res) => {
  try{
    const newTodo = await Todo.insertMany(req.body);
    // await newTodo.save();
    res.status(200).json({message:'todo all  is sucessfully added', todo:newTodo})
  }catch(err){
    res.status(500).json({error:'Faild to save date'})
  }
});

//Post multipil todo
router.get("/all", async (req, res) => {});

//put todo
router.put("/", async (req, res) => {});
//Delete todo
router.delete("/", async (req, res) => {
  try{
    const result = await Todo.deleteMany({});
    if(result.deletedCount === 0){
      return res.status(404).json({ error: "No Todos found to delete!" });
    }
    res.status(200).json({ message: "All Todos deleted successfully" });

  }catch(err){
    res.status(500).json({error: "Failed to delete Todos" })
  }
});


export default  router;