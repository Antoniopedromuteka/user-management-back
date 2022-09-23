import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { GetUsersController } from "./get-users-controller";
import { GetUserUseCase } from "./get-users-use-case";



const userRepository = new UserRepository();


const getUsersUseCase = new GetUserUseCase(userRepository);

const getUsersController = new GetUsersController(getUsersUseCase);


export {getUsersController};

