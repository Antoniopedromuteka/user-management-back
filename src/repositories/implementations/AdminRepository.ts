
import { Admin } from "../../entities/Admin";
import { client } from "../../prisma/client";
import {IAdminRepository} from "../IAdminRepository"
import {hash} from "bcrypt"

 

export class AdminRepository implements IAdminRepository {

    private admin: Admin[];

    private static INSTANCE: AdminRepository;

    constructor(){
        this.admin = []
    }

    public static getINSTANCE(): AdminRepository{
        if (!AdminRepository.INSTANCE)
            AdminRepository.INSTANCE = new AdminRepository();

        return AdminRepository.INSTANCE;
    }

 

    async findById(id: string): Promise<Admin>{

       const admin = await client.admin.findFirst({
            where:{
                id: id
            }
        })
        return admin
    }

    async findByEmail(email: string): Promise<Admin>{
        const admin = await client.admin.findFirst({
            where:{
                email: email
            }
        })
        return admin;
    }

    async save({name,email,password}:Admin): Promise<Admin>{
        const hashPassword = await hash(password, 8);
        const adminData = await client.admin.create({
          data:{
            name,
            email,
            password: hashPassword
          }
        })
        return adminData;
    }

}