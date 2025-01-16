import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller("users")
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    @HttpCode(200)
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post()
    @HttpCode(201)
    createUser (@Body() user: CreateUserDTO) {
        return this.usersService.createUser(user);

    }

}
