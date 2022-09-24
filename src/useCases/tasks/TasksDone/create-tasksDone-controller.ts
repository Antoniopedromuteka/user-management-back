import { Request, Response } from "express";
import { Tasks } from "../../../entities/Tasks";
import { client } from "../../../prisma/client";
import { CreateTasksDoneUseCase } from "./create-tasksDone-use-case";




export class CreateTasksDoneController{

    constructor(private createTasksDoneUseCase: CreateTasksDoneUseCase){}

    async handle(request:Request, response:Response): Promise<Response>{

        const {tasksId} = request.params;
        try{
            const data = await this.createTasksDoneUseCase.execute({tasksId});
            return response.status(202).send(data)
        }catch(err){

            return response.status(400).json({message: err.message} || "unexpected error");
        }


    }
}