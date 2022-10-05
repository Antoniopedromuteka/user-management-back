import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { GetUserByAdminController } from "./get-usersByAdmin-controller";
import { GetUserByAdminUseCase } from "./get-usersByAdmin-use-case";



const userRepository = new UserRepository();
const getUserByAdminUseCase = new GetUserByAdminUseCase(userRepository);
const getUserByAdminController = new GetUserByAdminController(getUserByAdminUseCase);


export {getUserByAdminController};