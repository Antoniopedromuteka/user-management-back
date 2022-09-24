import { TasksRepository } from "../../../repositories/implementations/TasksRepository";
import { GetTasksDoneController} from "./get-tasksDone-controller";
import { GetTasksDoneUseCase} from "./get-tasksDone-use-case";



const tasksRepository = new TasksRepository();


const getTasksDoneUseCase = new GetTasksDoneUseCase(tasksRepository);

const getTasksDoneController = new GetTasksDoneController(getTasksDoneUseCase);


export {getTasksDoneController};

