
import {randomUUID} from "crypto"

 
export class Admin{

    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;
    

    constructor(props: Omit<Admin, "id"> , id?:string) {

        Object.assign(this, props);

        if(!id){
            this.id = randomUUID();
        }

    }






}