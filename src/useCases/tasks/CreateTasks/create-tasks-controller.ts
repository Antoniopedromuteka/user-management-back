import { CreateTasksUseCase } from "./create-tasks-use-case";

import {Request, Response} from "express"



export class CreateTasksController{

    constructor(private createTasksUseCase: CreateTasksUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        
        const {userId} = request.params
        const {name, tipo} = request.body;
        const data = new Date().toDateString();


        try{
            const tasksData = await this.createTasksUseCase.execute({name, tipo, data, userId });
            return response.status(201).send(tasksData);
        }catch(err){
            return response.status(400).json({message: err.message} || "unexpected error");
        }


    }
}