import { Request, Response } from "express";
import { GetTasksUseCase } from "./get-tasks-use-case";



export class GetTasksController{

    constructor(private getTasksUseCase: GetTasksUseCase){}

    async handle(request:Request, response:Response): Promise<Response>{

        try{

            const getAllTasks = await this.getTasksUseCase.execute();
            return response.status(200).send(getAllTasks);            
        }catch(err){
            return response.status(400).json({message: err.message} || "unexpected error");
        }

    }
}