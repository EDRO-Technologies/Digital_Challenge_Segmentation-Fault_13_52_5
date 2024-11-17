import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
import { Role } from './roles.model';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(dto: CreateRoleDto): Promise<Role>;
    getByValue(value: string): Promise<Role>;
}
