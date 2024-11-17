import { ApiProperty } from "@nestjs/swagger";

    export class CreateUserDto {
    
    @ApiProperty({example: 'example@example.com', description: 'Адрес электронной почты'})
        readonly email: string;

    @ApiProperty({example: '123456', description: 'Пароль'})
    readonly password: string;

    @ApiProperty({example: 'Иванов Иван Иванович', description: 'ФИО'})
    readonly fullname: string;

    @ApiProperty({example: '01.01.2000', description: 'Дата рождения'})
    readonly dateborn: string;

    @ApiProperty({example: '+7 (999) 999-99-99', description: 'Адрес проживания'})
    readonly phone: string;
    }