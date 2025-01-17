import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class GreetDTO {
    @IsString()
    @IsNotEmpty()
    name: string;

    @Transform(({ value }) => parseInt(value))
    @IsNotEmpty()
    @IsNumber()
    age: number;
}