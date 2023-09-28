import { Controller, Post, Body, Get } from '@nestjs/common';
import { SignupService } from './signup.service';
import { CreateSignupDto } from './dto/create-signup.dto';

@Controller('signup')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post("new")
  create(@Body() createSignupDto: CreateSignupDto) {
    return this.signupService.create(createSignupDto);
  }

  @Get("details")
  getUser() {
    return this.signupService.getUser();
  }

  

}
