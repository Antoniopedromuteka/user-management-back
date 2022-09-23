import { Tasks } from "../../entities/Tasks";
import { User } from "../../entities/User";
import { client } from "../../prisma/client";
import { ITasksRepository } from "../ITasksRepository";



export class TasksRepository implements ITasksRepository{
    

    async findByName(name: string): Promise<Tasks>{
        const tasksName = await client.tasks.findFirst({
            where:{
                name: name,
            }
        })

        return tasksName;
    } 

    async findById(id: string): Promise<Tasks>{
        const taskId = await client.tasks.findFirst({
            where:{
                id: id
            }
        })

        return taskId;
    }

    async findByUserId(userId: string): Promise<User>{
        const userExits = await client.user.findFirst({
            where:{
                id: userId
            }
        })

        return userExits;
    }

    async save (tasks: Tasks): Promise<Tasks>{

        const taskData = await client.tasks.create({
            data: tasks
        })
        return taskData;
    }

    



}