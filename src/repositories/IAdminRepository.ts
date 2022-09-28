import { Admin } from "../entities/Admin";



// type getAdminProps = Omit<Admin, "id" | "password"> & {
     
// }

interface IAdminRepository {

    findById: (id: string) => Promise<Admin>;
    findByEmail: (email: string) => Promise<Admin>;
    save : (admin: Admin) => Promise<Admin>


}


export {IAdminRepository}