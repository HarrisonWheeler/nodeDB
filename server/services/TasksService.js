import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class TasksService {
  async find(query = {}) {
    let values = await dbContext.Tasks.find(query);
    return values;
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