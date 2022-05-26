/* eslint-disable */
import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async signup(email: string, password: string){
        // See if email its in use
        const users = await this.usersService.find(email);
        if(users.length) {
            throw new BadRequestException('Email is use');
        }

        // Hash the users password

        // Create a new user and save it

        // return the user 
    }

    signin() { 

    }
}