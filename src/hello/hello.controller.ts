import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { GreetDTO } from './dto/greet.dto';

@Controller('hello')
export class HelloController {
    @Get("/")
    index(@Req() request: Request, @Res() response: Response) {

        return response.status(200).json({
            message: "Hello World",
            Status: "Success"
        })
    }

    @Get()
    @HttpCode(404)
    notFoundPage() {
        return "Page not found";
    }

    @Get("/error")
    @HttpCode(500)
    errorPage() {
        return "Error route";
    }

    @Get("/ticket/:num")
    getNumber(@Param("num", ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get("active/:status")
    isUserActive(@Param("status", ParseBoolPipe) status: boolean) {
        return {
            status: status,
            type: typeof status
        };
    }

    @Get("greet/")
    greet(@Query() query: GreetDTO) {
        const { name, age } = query;

        return `Hi ${name} you are ${age} years old`;
    }
}
