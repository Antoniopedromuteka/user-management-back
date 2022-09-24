import { TasksRepository } from "../../../repositories/implementations/TasksRepository";



export class GetTasksDeletedUseCase{

    constructor(private tasksRepository: TasksRepository){}

    async execute(){

        const getAllTasks = await this.tasksRepository.getAllTasksDeleted();

        if(!getAllTasks.length){
            throw new Error("without tasks deleted");
        }

        return getAllTasks;

    }
}