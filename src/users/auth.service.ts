/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { UserService } from './users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}
}