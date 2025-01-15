import { Body, Controller, Delete, Get, Patch, Post, Put  } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/task.interfaces";
import { TaskDTO } from "./dto/task.dto";

@Controller("/tasks")
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.getTasks();
    }

    @Post()
    createTask(@Body() query: TaskDTO) {
        const { id, title, description } = query;


        return this.tasksService.createTask(query);
    }

    @Put()
    updateTasks() {
        return this.tasksService.updateTasks();
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }
}
