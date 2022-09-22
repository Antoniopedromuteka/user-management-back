
import { Admin } from "../../entities/Admin";
import { client } from "../../prisma/client";
import {IAdminRepository} from "../IAdminRepository"
import {hash} from "bcrypt"

 

export class AdminRepository implements IAdminRepository {

    async findById(id: string): Promise<Admin | any>{

       const admin = await client.admin.findFirst({
            where:{
                id: id
            }
        })
        return admin
    }

    async findByEmail(email: string): Promise<Admin | any>{
        const admin = await client.admin.findFirst({
            where:{
                email: email
            }
        })
        return admin;
    }

    async save(admin:Admin): Promise<Admin | any>{
        const hashPassword = await hash(admin.password, 8);
        const adminData = await client.admin.create({
            data: {...admin, password: hashPassword} 
        })
        return adminData;
    }

}