import express from "express";
import BaseController from "../utils/BaseController";
import { tasksService } from "../services/TasksService";

export class TaskController extends BaseController {
  constructor() {
    super("api/tasks");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
  }
  async getAll(req, res, next) {
    try {
      let tasks = await tasksService.getAll()
      res.send({ data: tasks, message: "Got the tasks!" })
    } catch (err) {
      next(err);
    }
  }
  async getById(req, res, next) {
    try {
      let tasks = await tasksService.getTasksById(req.params.id)
      res.send({ data: tasks, message: "Got the specific task!" })
    } catch (err) {
      next(err)
    }
  }
  async create(req, res, next) {
    try {
      let rawTaskData = req.body
      let tasks = await tasksService.create(rawTaskData)
      res.send({ data: tasks, message: "Created a task!" })
    } catch (err) {
      next(err);
    }
  }

  async edit(req, res, next) {
    try {
      let editedTaskData = req.body
      let tasks = await tasksService.edit(req.params.id, editedTaskData)
      res.send({ data: tasks, message: "Edited your task!" })
    } catch (err) {
      next(err)
    }
  }
}
