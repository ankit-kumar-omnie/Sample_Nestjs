import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {

    public users : User[] = [{
        username: "admin",
        password: "admin02",
        email: "admin@gmail.com",
    }]


    getUserByName(userName : string) : User{
        return this.users.find((User : User) => User.username === userName)
    }


}



