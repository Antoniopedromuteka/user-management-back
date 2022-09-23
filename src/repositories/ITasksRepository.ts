import { Tasks } from "../entities/Tasks";
import { User } from "../entities/User";
import { dataDeleteProps } from "./implementations/TasksRepository";



 

export interface ITasksRepository{
    findById: (id: string) => Promise<Tasks>;
    findByUserId: (userId: string) => Promise<User>
    findByName: (name: string) => Promise<Tasks>;
    deleteTaskById: (id: string) => Promise<Tasks>;
    save:(tasks: Tasks) => Promise<Tasks>;
    saveTaskDeleted: (tasks:dataDeleteProps) => Promise<void>;
    getAllTasks: () => Promise<Tasks[]>;
    
}