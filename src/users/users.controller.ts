/* eslint-disable */
import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Query,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { Serialize } from '../interceptors/serialize.interceptors';
import { UserDto } from './dtos';
import { AuthService } from './auth.service';


@Controller('auth')
@Serialize(UserDto) // Disabled Password
export class UsersController {
  constructor(
      private usersService: UsersService,
      private authService : AuthService,
      ) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    return this.authService.signup(body.email,body.password);
  }

  // @UseInterceptors(new SerializeInterceptor(UserDto))

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    console.log('handler is running...');
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('User not Found');
    }
    return user;
  }
 
  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
