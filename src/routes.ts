

import {Request, request, Response, Router} from "express"
import { createAdminController } from "./useCases/admin";


const routes  = Router();


routes.post("/admin", (request:Request, response:Response)=>{

    createAdminController.handle(request, response);
})

 






export {routes};