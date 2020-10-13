import ValueSchema from "../models/Tasks";
import mongoose from "mongoose";

class DbContext {
  Tasks = mongoose.model("Task", ValueSchema);
}

export const dbContext = new DbContext();
