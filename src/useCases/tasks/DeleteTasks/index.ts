

 import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
 import { DeleteTasksController } from "./delete-tasks-controller";
 import { DeleteTasksUseCase } from "./delete-tasks-use-case";
 
 
 
 const tasksRepository  = new TasksRepository();
 
 const deleteTasksUseCase = new DeleteTasksUseCase(tasksRepository);
 
 const deleteTasksController = new DeleteTasksController(deleteTasksUseCase);
 
 
 export {deleteTasksController}
 
 
 