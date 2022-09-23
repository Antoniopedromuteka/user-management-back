import { User } from "../../../entities/User";
import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { ICreateUserDTO } from "./create-user-dto";




export class CreateUserUseCase{

    constructor(private userRepository: UserRepository){}

    async execute(data: ICreateUserDTO){

        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        const adminExists = await this.userRepository.findById(data.adminId);

        if(!adminExists){
            throw new Error("Something is wrong");
        }

        if(userAlreadyExists){
            throw new Error("User already exists");
        }
        const user = new User(data)

        const userSaved = await this.userRepository.save(user);
        return userSaved;
    }

}