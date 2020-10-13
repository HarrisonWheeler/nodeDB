import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class TasksService {
  async getAll(query = {}) {
    let tasks = await dbContext.Tasks.find();
    return tasks;
  }

  async create(rawTaskData) {
    let tasks = await dbContext.Tasks.create(rawTaskData)
  }
  async getTasksById(id) {
    let task = await dbContext.Tasks.findById(id);
    if (!task) {
      throw new BadRequest("Invalid Id");
    }
    return task;
  }
}

export const tasksService = new TasksService();