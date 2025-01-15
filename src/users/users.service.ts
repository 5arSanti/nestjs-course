import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: "User 1",
            phone: "1234567890"
        },
        {
            id: 2,
            name: "User 2",
            phone: "1234567890"
        },
        {
            id: 3,
            name: "User 3",
            phone: "1234567890"
        },
    ]

    getUsers () {
        return this.users;
    }
}
