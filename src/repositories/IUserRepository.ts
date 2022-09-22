import { Admin } from "../entities/Admin";
import {User} from "../entities/User"


interface IUserRepository{
    findById: (id: string) => Promise<Admin>;
    findByEmail: (email: string) => Promise<User>;
    save : (user: User) => Promise<User>
}


export {IUserRepository}