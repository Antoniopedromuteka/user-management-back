import { Admin } from "../../entities/Admin";
import { User } from "../../entities/User";
import { client } from "../../prisma/client";
import { IUserRepository } from "../IUserRepository";




export class UserRepository implements IUserRepository {

    async findById(id: string):Promise<Admin>{
        const user = await client.admin.findFirst({
            where: {
                id: id
            }
        })
        return user;
    }

    async findByEmail(email: string): Promise<User>{
        const user = await client.user.findFirst({
            where:{
                email: email
            }
        })
        return user;
    }

    async save({name,email,cargo, adminId}: User): Promise<User>{
        const userData = await client.user.create({
            data: {
                name,
                email,
                cargo,
                adminId            
            }
        })
        return userData;
    }
    
}