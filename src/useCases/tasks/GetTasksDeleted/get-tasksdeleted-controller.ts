import { Request, Response } from "express";
import { GetTasksDeletedUseCase} from "./get-tasksdeleted-use-case";



export class GetTasksDeletedController{

    constructor(private getTasksDeletedUseCase: GetTasksDeletedUseCase){}

    async handle(request:Request, response:Response): Promise<Response>{

        try{

            const getAllDeletedTasks = await this.getTasksDeletedUseCase.execute();
            return response.status(200).send(getAllDeletedTasks);            
        }catch(err){
            return response.status(404).json({message: err.message} || "unexpected error");
        }

    }
}