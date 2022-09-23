import { TasksRepository } from "../../repositories/implementations/TasksRepository";
import { CreateTasksController } from "./create-tasks-controller";
import { CreateTasksUseCase } from "./create-tasks-use-case";



const tasksRepository  = new TasksRepository();

const createTasksUseCase = new CreateTasksUseCase(tasksRepository);

const createTasksController = new CreateTasksController(createTasksUseCase);


export {createTasksController}


