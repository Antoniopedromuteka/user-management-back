import {randomUUID} from "crypto"


export class Tasks{

    public readonly id : string;

    public name: string;
    public tipo: string;
    public data: string;
    public userId: string;

    constructor(props: Omit<Tasks, "id">,  id?:string){

        Object.assign(this, props);
        
        if(!id){
            this.id = randomUUID();
        }
    }
    
    


}