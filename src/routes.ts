

import {Request, request, Response, Router} from "express"
import { createAdminController } from "./useCases/admin";
import { createTasksController } from "./useCases/tasks/CreateTasks";
import { deleteTasksController } from "./useCases/tasks/DeleteTasks";
import { createUserController } from "./useCases/users/CreateUser";
import { getUsersController } from "./useCases/users/GetUsers";


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

routes.get("/users", (request:Request, response:Response)=>{
    getUsersController.handle(request, response);
})

routes.delete("/tasks/:tasksId", (request:Request, response:Response)=>{
    deleteTasksController.handle(request, response);
})
 






export {routes};