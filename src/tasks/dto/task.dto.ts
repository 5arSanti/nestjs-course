import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class TaskDTO {
    @IsNotEmpty()
    @IsString()
    id: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;
}