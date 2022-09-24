

 import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
 import { CreateTasksDoneController} from "./create-tasksDone-controller";
 import { CreateTasksDoneUseCase } from "./create-tasksDone-use-case";
 
 
 
 const tasksRepository  = new TasksRepository();
 
 const createTasksDoneUseCase = new CreateTasksDoneUseCase(tasksRepository);
 
 const createTasksDoneUseController = new CreateTasksDoneController(createTasksDoneUseCase);
 
 
 export {createTasksDoneUseController}
 
 
 