import { Admin } from "../entities/Admin";



declare global {
    namespace Express{
        export interface Request{
            admin: Partial<Admin>
        }
    }
}