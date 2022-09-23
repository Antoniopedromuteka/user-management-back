

import {Request, request, Response, Router} from "express"
import { createAdminController } from "./useCases/admin";
import { createTasksController } from "./useCases/tasks";
import { createUserController } from "./useCases/users";


const routes  = Router();


routes.post("/admin", (request:Request, response:Response)=>{
    createAdminController.handle(request, response);
})

routes.post("/users/:adminId", (request:Request, response:Response)=>{
    createUserController.handle(request, response);
})

routes.post("/tasks/:userId", (request:Request, response:Response)=>{
    createTasksController.handle(request, response);
})

 






export {routes};