import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user-dto';

@Controller("users")
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createUser (@Body() user: CreateUserDTO) {
        return this.usersService.createUser(user);

    }

}
