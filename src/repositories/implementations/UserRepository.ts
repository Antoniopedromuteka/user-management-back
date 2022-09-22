import { User } from "../../entities/User";
import { client } from "../../prisma/client";
import { IUserRepository } from "../IUserRepository";




export class UserRepository implements IUserRepository {

    async findById(id: string):Promise<User>{
        const user = await client.user.findFirst({
            where: {
                id: id
            }
        })
        return user
    }

    async findByEmail(email: string): Promise<User>{
        const user = await client.user.findFirst({
            where:{
                email: email
            }
        })
        return user
    }

    async save(user: User): Promise<User>{
        const userData = await client.user.create({
            data: user
        })
        return userData;
    }
    
}