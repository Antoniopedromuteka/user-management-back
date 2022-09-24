import { Request, Response } from "express";
import { GetTasksDoneUseCase } from "./get-tasksDone-use-case";



export class GetTasksDoneController{

    constructor(private getTasksDoneUseCase: GetTasksDoneUseCase){}

    async handle(request:Request, response:Response): Promise<Response>{

        try{

            const getAllTasksDone = await this.getTasksDoneUseCase.execute();
            return response.status(200).send(getAllTasksDone);            
        }catch(err){
            return response.status(400).json({message: err.message} || "unexpected error");
        }

    }
}