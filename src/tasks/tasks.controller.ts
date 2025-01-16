import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query  } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/task.interfaces";
import { TaskDTO } from "./dto/task.dto";

@Controller("/tasks")
export class TasksController {

    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(@Query("limit") limit: number) {
        return this.tasksService.getAllTasks(limit);
    }
    
    @Get("/:id")
    getTask(@Param("id") id: string): TaskDTO {
        return this.tasksService.getTask(id);
    }   

    @Post()
    createTask(@Body() query: TaskDTO) {
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
