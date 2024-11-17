import { Model } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
interface UserCreationAttrs {
    email: string;
    password: string;
    fullname: string;
    dateborn: string;
    role: string;
    phone: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    fullname: string;
    dateborn: string;
    educationadress: string;
    phone: string;
    direction: string;
    email: string;
    avatar: string;
    password: string;
    roles: Role[];
}
export {};
