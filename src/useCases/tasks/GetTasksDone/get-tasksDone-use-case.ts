import { TasksRepository } from "../../../repositories/implementations/TasksRepository";



export class GetTasksDoneUseCase{

    constructor(private tasksRepository: TasksRepository){}

    async execute(){

        const getAllTasksDone = await this.tasksRepository.getAllTasksDone();

        if(!getAllTasksDone.length){
            throw new Error("without tasks");
        }

        return getAllTasksDone;

    }
}