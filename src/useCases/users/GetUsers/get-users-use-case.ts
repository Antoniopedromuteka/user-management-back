import { UserRepository } from "../../../repositories/implementations/UserRepository";



export class GetUserUseCase{

    constructor(private userRepository: UserRepository){}

    async execute(){

        const getAllUsers = await this.userRepository.getAllUsers();

        if(!getAllUsers.length){
            throw new Error("No users found ");
        }

        return getAllUsers;

    }
}