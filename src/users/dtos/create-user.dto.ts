/* eslint-disable */
import { IsEmail, IsString,IsNotEmpty } from 'class-validator';
export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
