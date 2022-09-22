
import {randomUUID} from "crypto"

import { User } from "./User";

export class Admin{

    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;
    public user: User;
    

    

    constructor(props: Omit<Admin, "id"> , id?:string){

        Object.assign(this, props);

        if(id){
            this.id = randomUUID();
        }

    }






}