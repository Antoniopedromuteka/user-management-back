import { Tasks } from "../../../entities/Tasks";
import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { IDeleteTasksDTO } from "./delete-tasks-dto";



export class DeleteTasksUseCase{

    constructor(private taskRepository: TasksRepository){}

    async execute({tasksId}: IDeleteTasksDTO){

        const tasksExists = await this.taskRepository.findById(tasksId);

        if(!tasksExists){
            throw new Error("task not found")
        }

        const {name, tipo, data} = tasksExists;

        const dataD = {
            name,
            tipo,
            data,
        }

        const saveTask = await this.taskRepository.saveTaskDeleted(dataD);
        const tasksDeleted = await this.taskRepository.deleteTaskById(tasksId);

        return tasksDeleted;

    }

}