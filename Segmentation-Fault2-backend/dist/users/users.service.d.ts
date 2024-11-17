import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { addRoleDto } from './dto/add-role.dto';
export declare class UsersService {
    private userRepository;
    private rolesService;
    constructor(userRepository: typeof User, rolesService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    addRole(dto: addRoleDto): Promise<addRoleDto>;
}
