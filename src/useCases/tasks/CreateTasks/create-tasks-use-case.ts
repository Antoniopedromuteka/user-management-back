import { Tasks } from "../../../entities/Tasks";
import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { ITasksDTO } from "./create-tasks-dto";



export class CreateTasksUseCase{

    constructor(private tasksRepository:TasksRepository){}

    async execute(tasks: ITasksDTO){

        const userExits = await this.tasksRepository.findByUserId(tasks.userId);

        if(!userExits){
            throw new Error("User not found");
        }
        const tasksForUser = new Tasks(tasks);
        const tasksData = await this.tasksRepository.save(tasksForUser);
        return tasksData;
    }
}