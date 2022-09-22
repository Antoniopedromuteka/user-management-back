import { Request, Response } from "express";
import { CreateAdminUseCase } from "./create-admin-use-case";



export class CreateAdminController{

    constructor(private createAdminUseCase: CreateAdminUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{

        const {name, email, password} = request.body;

        try{
            const admin = await this.createAdminUseCase.execute({name, email, password});

            return response.status(201).send(admin);
        }catch(err){
            return response.status(400).json({message: err.message} || "unexpected error");
        }

    }
}