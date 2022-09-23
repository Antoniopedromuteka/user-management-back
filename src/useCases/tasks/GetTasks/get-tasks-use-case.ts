import { TasksRepository } from "../../../repositories/implementations/TasksRepository";



export class GetTasksUseCase{

    constructor(private tasksRepository: TasksRepository){}

    async execute(){

        const getAllTasks = await this.tasksRepository.getAllTasks();

        if(!getAllTasks.length){
            throw new Error("without tasks");
        }

        return getAllTasks;

    }
}