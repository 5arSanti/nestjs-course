import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class TaskDTO {
    @IsNotEmpty()
    @IsString()
    @IsAlphanumeric()
    id: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}