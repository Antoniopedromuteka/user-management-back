import { Request, Response } from "express";
import { Tasks } from "../../../entities/Tasks";
import { client } from "../../../prisma/client";
import { DeleteTasksUseCase } from "./delete-tasks-use-case";




export class DeleteTasksController{

    constructor(private deleteTasksUseCase: DeleteTasksUseCase){}

    async handle(request:Request, response:Response): Promise<Response>{

        const {tasksId} = request.params;
        try{
            const data = await this.deleteTasksUseCase.execute({tasksId});
            return response.status(202).send(data)
        }catch(err){

            return response.status(400).json({message: err.message} || "unexpected error");
        }


    }
}