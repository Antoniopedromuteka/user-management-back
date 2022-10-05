import { Request, Response } from "express";
import { GetUserByAdminUseCase } from "./get-usersByAdmin-use-case";





export class GetUserByAdminController{

    constructor (private getUserByAdminUseCase: GetUserByAdminUseCase){}

    async handle(request:Request, response:Response):Promise<Response>{

        const {id} = request.params;

        try{
            const users = await this.getUserByAdminUseCase.execute({id});
            return response.status(200).send(users);
        }catch(err){
            return response.status(400).send({message: err.message || "unexpected error"});
        }
    }

}