import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { GetTasksController} from "./get-tasks-controller";
import { GetTasksUseCase} from "./get-tasks-use-case";



const tasksRepository = new TasksRepository();


const getTasksUseCase = new GetTasksUseCase(tasksRepository);

const getTasksController = new GetTasksController(getTasksUseCase);


export {getTasksController};

