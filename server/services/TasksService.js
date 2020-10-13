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
  async findById(id) {
    let value = await dbContext.Tasks.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const tasksService = new TasksService();