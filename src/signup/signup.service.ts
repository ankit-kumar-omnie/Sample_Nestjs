import { Injectable } from '@nestjs/common';
import { Signup, SignupDocument } from './schema/signup.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSignupDto } from './dto/create-signup.dto';


@Injectable()
export class SignupService {
  
  
  constructor(@InjectModel(Signup.name)
  private readonly signupModel: Model<SignupDocument>) { }
  
  
  create(signup: Signup) : Promise<Signup>{
    const newSignup = new this.signupModel(signup)
    return newSignup.save();
  }

  getUser() {
    return this.signupModel.find({}).exec();
  }

  //   getUserByName(userName: string)  {
  //   return this.signupModel.find((User: CreateSignupDto) =>
  //     User.firstname == userName)
  // }

  
}
