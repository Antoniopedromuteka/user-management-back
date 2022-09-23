import { Request, Response } from "express";
import { GetUserUseCase } from "./get-users-use-case";



export class GetUsersController{

    constructor(private getUsersUseCase: GetUserUseCase ){}

    async handle(request:Request, response:Response): Promise<Response>{

        try{

            const getAllUsers = await this.getUsersUseCase.execute();
            return response.status(201).send(getAllUsers);            
        }catch(err){
            return response.status(400).json({message: err.message} || "unexpected error");
        }

    }
}