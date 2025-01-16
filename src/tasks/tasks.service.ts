import { HttpException, Injectable, NotFoundException, Query } from "@nestjs/common";
import { TaskDTO } from "./dto/task.dto";

@Injectable()
export class TasksService {

    private tasks = [];

    getAllTasks(limit: number): {
        tasks: TaskDTO[],
        limit: number
    } {
        return {
            tasks: this.tasks, 
            limit,
        };      
    }

    getTask (id: string) {        
        const task: TaskDTO = this.tasks.find(task => task.id === id);

        if (!task) {
            return new NotFoundException(`Task with id ${id} not found`);
        }

        return task;
    }

    createTask(task: TaskDTO) {

        this.tasks.push(task)

        return "Tarea agregada correctamente";
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