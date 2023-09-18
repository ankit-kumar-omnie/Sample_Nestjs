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
            username: "User1",
            password: "User01",
            email: "User1@gmail.com",
        },
        {
            username: "User02",
            password: "User02",
            email: "User2@gmail.com",
        },
]


    getUserByName(userName : string) : User{
        return this.users.find((User : User) => User.username === userName)
    }


}



