import { AdminRepository } from "../../../repositories/implementations/AdminRepository";
import { IAuthenticateAdminDTO } from "./authentication-admin-dto";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export class AuthenticationAdminUseCase{

    constructor(private adminRepository: AdminRepository){}

    async execute({email, password}: IAuthenticateAdminDTO){

        const admin = await this.adminRepository.findByEmail(email);

        if(!admin){
            throw new Error("email or password are incorrect");
        }

        const verifyPassword = await bcrypt.compare(password, admin.password);

        if(!verifyPassword){
            throw new Error("email or password are incorrect");
        }


        const token = jwt.sign({id : admin.id}, "muteka",{
            expiresIn: "40s"
        });

        return{
            token,
            admin:{
                name: admin.name,
                email: admin.email
            }
        }

    }

}