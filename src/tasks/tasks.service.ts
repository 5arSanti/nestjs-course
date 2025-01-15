import { Body, Injectable } from "@nestjs/common";
import { Task } from "./interfaces/task.interfaces";

export interface User {
    name: string,
    age: number
}

@Injectable()
export class TasksService {
    getTasks(): User[] {
        return [
            { name: "User 1", age: 20 },
            { name: "User 2", age: 30 },
            { name: "User 3", age: 40 }
        ];
    }

    createTask(@Body() query: Task) {
        return query;
    }

    updateTasks() {
        return "Actualizando tareas"
    }

    deleteTask() {
        return "Eliminando tareas"
    }

    updateTaskStatus() {
        return "Actualizando estado de la tarea"
    }

    
}