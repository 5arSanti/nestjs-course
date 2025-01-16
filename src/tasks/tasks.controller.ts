import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe  } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/task.interfaces";
import { TaskDTO } from "./dto/task.dto";

@Controller("/tasks")
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    @HttpCode(200)
    getAllTasks(@Query("limit") limit: number) {
        return this.tasksService.getAllTasks(limit);
    }
    
    @Get("/:id")
    @HttpCode(200)
    getTask(@Param("id") id: string) {
        return this.tasksService.getTask(id);
    }   

    @Post()
    @HttpCode(201)
    createTask(@Body() query: TaskDTO) {
        return this.tasksService.createTask(query);
    }

    @Put()
    @HttpCode(201)
    updateTasks() {
        return this.tasksService.updateTasks();
    }

    @Delete()
    @HttpCode(200)
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }
}
