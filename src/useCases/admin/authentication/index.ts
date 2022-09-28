

import {AdminRepository} from "../../../repositories/implementations/AdminRepository"
import { AuthenticationAdminController } from "./authentication-admin-controller";
import { AuthenticationAdminUseCase } from "./authentication-admin-use-case";



const adminRepository = new AdminRepository();

const authenticationAdminUseCase = new AuthenticationAdminUseCase(adminRepository);

const authenticationAdminController = new AuthenticationAdminController(authenticationAdminUseCase);

export {authenticationAdminController}

