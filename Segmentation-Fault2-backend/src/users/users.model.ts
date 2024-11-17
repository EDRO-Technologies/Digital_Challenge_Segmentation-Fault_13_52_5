import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table, Model, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
    fullname: string;
    dateborn: string;
    role: string;
    phone: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Иванов Иван Иванович', description: 'ФИО'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    fullname: string;

    @ApiProperty({example: '01.01.2000', description: 'Дата рождения'})
    @Column({type: DataType.STRING, allowNull: false})
    dateborn: string;

    @ApiProperty({example: 'г. Москва, ул. Пушкина, д. 1', description: 'Адрес проживания'})
    @Column({type: DataType.STRING, allowNull: true})
    educationadress: string;

    @ApiProperty({example: '8-999-999-99-99', description: 'Номер телефона'})
    @Column( {type: DataType.STRING, allowNull: false})
    phone: string;

    @ApiProperty({example: 'Frontend' , description: 'Направление'})
    @Column({ type: DataType.STRING, allowNull: true})
    direction: string;

    @ApiProperty({example: 'example@example.com', description: 'Номер телефона'})
    @Column({ type: DataType.STRING, allowNull: false, unique: true})
    email: string;
    
    @ApiProperty({example: 'https://example.com/avatar.jpg', description: 'Ссылка на аватар'})
    @Column({type: DataType.STRING, allowNull: true})
    avatar: string;
    
    @ApiProperty({example: '123456', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];
}