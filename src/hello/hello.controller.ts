import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('hello')
export class HelloController {
    @Get("/")
    index(@Req() request: Request, @Res() response: Response) {

        return response.status(200).json({
            message: "Hello World",
            Status: "Success"
        })
    }

}
