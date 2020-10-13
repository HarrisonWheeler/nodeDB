import TasksSchema from "../models/Tasks";
import mongoose from "mongoose";

class DbContext {
  Tasks = mongoose.model("Task", TasksSchema);
}

export const dbContext = new DbContext();
