import { Request, Response } from "express";
import { AuthenticationAdminUseCase } from "./authentication-admin-use-case";



export class AuthenticationAdminController{

    constructor(private authenticationAdminUseCase: AuthenticationAdminUseCase){}


    async handle(request: Request, response:Response):Promise<Response>{

        const {email, password} = request.body;

        try{
            const admin = await this.authenticationAdminUseCase.execute({email, password});
            return response.status(201).send(admin);
        }catch(error){

            return response.status(400).json({message: error.message || "unexpected error"});
        }
    }

}