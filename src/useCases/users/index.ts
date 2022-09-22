import { UserRepository } from "../../repositories/implementations/UserRepository";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";


const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUseCase);


export {createUserController}