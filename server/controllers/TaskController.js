import express from "express";
import BaseController from "../utils/BaseController";
import { tasksService } from "../services/TasksService";

export class TaskController extends BaseController {
  constructor() {
    super("api/tasks");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      return res.send(["value1", "value2"]);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
