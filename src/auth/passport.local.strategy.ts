import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";



@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService : UserService) {
    super();
  }


  validate(username : string, password : string): User{
    const user = this.userService.getUserByName(username);
    if(user == undefined) throw new UnauthorizedException();

    if(user.password == password) return user;
  }
  
}