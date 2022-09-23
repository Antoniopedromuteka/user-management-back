import { Tasks } from "../../entities/Tasks";
import { User } from "../../entities/User";
import { client } from "../../prisma/client";
import { ITasksRepository } from "../ITasksRepository";

export interface dataDeleteProps{
    name: string,
    tipo: string,
    data: string
}

export class TasksRepository implements ITasksRepository{
    

    async findByName(name: string): Promise<Tasks>{
        const tasksName = await client.tasks.findFirst({
            where:{
                name: name,
            }
        })

        return tasksName;
    } 

    async findById(taskId: string): Promise<Tasks>{
        const taskIdData = await client.tasks.findFirst({
            where:{
                id: taskId
            }
        })

        return taskIdData;
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

    
    async deleteTaskById(taskId: string) : Promise<Tasks>{
        const tasksDeleted = await client.tasks.delete({
            where:{
                id: taskId
            }
        })

        return tasksDeleted;
        
    }

    async saveTaskDeleted(tasks:dataDeleteProps): Promise<void>{
        const data = await client.tasksDeleted.create({
            data: tasks
        })
    }



    async getAllTasks(): Promise<Tasks[]>{
        const tasksData = await client.tasks.findMany();

        return tasksData;
    }
    



}