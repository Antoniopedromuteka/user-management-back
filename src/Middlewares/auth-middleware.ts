
import {NextFunction,Request, Response} from "express";

import jwt from "jsonwebtoken";
import { AdminRepository } from "../repositories/implementations/AdminRepository";
 


type JwtPayLoadProps = {
    id: string;
}

export class AuthMiddleware{

    async auth(request: Request, response: Response, next: NextFunction){

        const {authorization} = request.headers;

        if(!authorization){
            return response.status(401).json({message: "unauthorized"});
        }


        try{
            const token = authorization.replace("Bearer", "").trim();

            const {id} = jwt.verify(token, "muteka") as JwtPayLoadProps;

            const repository = AdminRepository.getINSTANCE();

            const admin = await repository.findById(id);

            if(!admin){
                throw new Error("unauthorized")
            }

            request.admin = {email: admin.email, name: admin.name}
             
           next();

        }catch(err){
            return response.status(401).json({message: err.message || "unexpected error"});
        }

    }

}