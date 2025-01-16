import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';

@Injectable()
export class UsersService {

    private users: CreateUserDTO[] = []

    getUsers () {
        return this.users;
    }

    createUser(user: CreateUserDTO) {
        if (this.users.find(u => u.id === user.id)) {
            return new ConflictException(`User with id ${user.id} already exists`);
        }

        this.users.push(user);

        return "Usuario creado correctamente";
    }
}
