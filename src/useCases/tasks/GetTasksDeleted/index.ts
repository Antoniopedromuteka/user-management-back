import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { GetTasksDeletedController} from "./get-tasksdeleted-controller";
import { GetTasksDeletedUseCase} from "./get-tasksdeleted-use-case";



const tasksRepository = new TasksRepository();


const getTasksDeletedUseCase = new GetTasksDeletedUseCase(tasksRepository);

const getTasksDeletedController = new GetTasksDeletedController(getTasksDeletedUseCase);


export {getTasksDeletedController};

