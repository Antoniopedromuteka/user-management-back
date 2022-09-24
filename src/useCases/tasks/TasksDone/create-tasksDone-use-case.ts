import { Tasks } from "../../../entities/Tasks";
import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { ICreateTasksDoneDTO } from "./create-tasksDone-dto";



export class CreateTasksDoneUseCase{

    constructor(private taskRepository: TasksRepository){}

    async execute({tasksId}: ICreateTasksDoneDTO){

        const tasksExists = await this.taskRepository.findById(tasksId);

        if(!tasksExists){
            throw new Error("task not found")
        }

        const tasks = {
            ...tasksExists,
            data: new Date().toDateString()
        }
        const tasksDone = new Tasks(tasks);

  

        const saveTaskDone = await this.taskRepository.saveTaskDone(tasksDone);
        const tasksDeleted = await this.taskRepository.deleteTaskById(tasksId);

        return tasksDeleted;

    }

}