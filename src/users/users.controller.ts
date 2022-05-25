/* eslint-disable */
import { Body } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dtop';

@Controller('users')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
      console.log(body);
  }
}