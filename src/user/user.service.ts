import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {

    public users : User[] = [{
        username: "admin",
        password: "admin02",
        email: "admin@gmail.com",
    },
    {
        username: "user 1",
        password: "user@01",
        email: "user1@gmail.com",
    },
    {
        username: "user 2",
        password: "user@02",
        email: "user2@gmail.com",
    },
    {
        username: "user 3",
        password: "user@03",
        email: "user3@gmail.com",
    }]


    getUserByName(userName : string) : User{
        return this.users.find((User : User) => User.username === userName)
    }


}



