import { Controller, Delete, Get, Patch, Post, Put  } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get('/tasks')
    getAllTasks() {
        return this.tasksService.getTasks();
    }

    @Post("/tasks")
    createTask() {
        return "Creado tareas"
    }

    @Put("/tasks")
    updateTasks() {
        return "Actualizando tareas"
    }

    @Delete("/tasks")
    deleteTask() {
        return "Eliminando tareas"
    }

    @Patch("/tasks")
    updateTaskStatus() {
        return "Actualizando estado de la tarea"
    }
}
