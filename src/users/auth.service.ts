/* eslint-disable */
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);


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
        // Generate a salt
        const salt = randomBytes(8).toString('hex'); //tạo 8 chữ ngẫu nhiên theo mã hex

        // Hash the salt and the password together
        const hash = (await scrypt(password, salt, 32)) as Buffer; //convert type unknown to Buffer
        
        // Join the hash result and the salt together
        const result = salt + '.' + hash.toString('hex'); //salt.hash

        // Create a new user and save it
        const user = await this.usersService.create(email,result);

        // return the user
        return user; 
    }
    /*SIGN IN */

    async signin(email: string, password: string) { 
        const [user] = await this.usersService.find(email);
        if(!user) {
            throw new NotFoundException('User not found');
        }

        const [salt, storedHash] = user.password.split('.'); //salt.hash -> salthash

        const hash = (await scrypt(password, salt,32)) as Buffer;

        if (storedHash !== hash.toString('hex')) {
            throw new BadRequestException('bad password');
        } 
        
        return user;
    }
}