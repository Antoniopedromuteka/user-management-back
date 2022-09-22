import { AdminRepository } from "../../repositories/implementations/AdminRepository";
import { CreateAdminController } from "./create-admin-controller";
import { CreateAdminUseCase } from "./create-admin-use-case";


const adminRepository = new AdminRepository();

const createAdminUseCase = new CreateAdminUseCase(adminRepository);

const createAdminController = new CreateAdminController(createAdminUseCase);

export {createAdminController};



