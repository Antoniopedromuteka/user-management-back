

import {Request, request, Response, Router} from "express"
import { AuthMiddleware } from "./Middlewares/auth-middleware";
import { createAdminController } from "./useCases/admin";
import { authenticationAdminController } from "./useCases/admin/authentication";
import { createTasksController } from "./useCases/tasks/CreateTasks";
import { deleteTasksController } from "./useCases/tasks/DeleteTasks";
import { getTasksController } from "./useCases/tasks/GetTasks";
import { getTasksDeletedController } from "./useCases/tasks/GetTasksDeleted";
import { getTasksDoneController } from "./useCases/tasks/GetTasksDone";
import { createTasksDoneUseController } from "./useCases/tasks/TasksDone";
import { createUserController } from "./useCases/users/CreateUser";
import { getUserByAdminController } from "./useCases/users/GetUserByAdmin";
import { getUsersController } from "./useCases/users/GetUsers";


const routes  = Router();




const authMiddleware = new AuthMiddleware();

routes.post("/admin/authenticate", (request:Request, response:Response) =>{
    authenticationAdminController.handle(request, response);
})

routes.post("/admin", (request:Request, response:Response)=>{
    createAdminController.handle(request, response);
})



routes.use(authMiddleware.auth);

routes.get("/users/:id", (request:Request, response:Response)=>{
    getUserByAdminController.handle(request, response);
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

routes.get("/tasks", (request:Request, response:Response)=>{
    getTasksController.handle(request, response);
})

routes.delete("/tasks/:tasksId", (request:Request, response:Response)=>{
    deleteTasksController.handle(request, response);
})

routes.get("/tasksdeleted", (request:Request, response:Response)=>{
    getTasksDeletedController.handle(request, response);
})

routes.get("/tasksDone", (request:Request, response:Response)=>{
    getTasksDoneController.handle(request, response);
})

routes.post("/tasksDone/:tasksId", (request:Request, response:Response)=>{
    createTasksDoneUseController.handle(request, response);
})




 






export {routes};