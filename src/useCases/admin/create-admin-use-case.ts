import { Admin } from "../../entities/Admin";
import { AdminRepository } from "../../repositories/implementations/AdminRepository";
import { ICreateAdminDTO } from "./create-admin-dto";




export class CreateAdminUseCase{

    constructor(private adminRepository: AdminRepository){}

    async execute(data: ICreateAdminDTO){

        const adminAlreadyExists = await this.adminRepository.findByEmail(data.email);

        if(adminAlreadyExists){
            throw new Error("Admin already exists");
        }

        const admin = new Admin(data);
        

        const adminSaved = await this.adminRepository.save(admin);

        return adminSaved;

    }

}