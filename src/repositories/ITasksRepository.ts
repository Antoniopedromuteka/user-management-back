import { Tasks } from "../entities/Tasks";
import { User } from "../entities/User";




export interface ITasksRepository{
    findById: (id: string) => Promise<Tasks>;
    findByUserId: (userId: string) => Promise<User>
    findByName: (name: string) => Promise<Tasks>;
    save:(tasks: Tasks) => Promise<Tasks>;
}