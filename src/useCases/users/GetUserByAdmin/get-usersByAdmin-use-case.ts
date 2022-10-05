import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { IGetUsersByAdminDTO } from "./get-usersByAdmin-DTO";





export class GetUserByAdminUseCase{


     constructor(private useRepository: UserRepository){}

     async execute({id}: IGetUsersByAdminDTO){
        const users = await this.useRepository.getUserByAdminId(id)
        if(!users.length){
            throw new Error("Users not found")
        }
        return users;
     }
}