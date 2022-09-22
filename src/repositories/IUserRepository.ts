import {User} from "../entities/User"


interface IUserRepository{
    findById: (id: string) => Promise<User>;
    findByEmail: (email: string) => Promise<User>;
    save : (user: User) => Promise<User>
}


export {IUserRepository}