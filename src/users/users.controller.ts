/* eslint-disable */
import { Body } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtop';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}
  
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
    console.log(body);
  }
}
