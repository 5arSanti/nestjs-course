import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}