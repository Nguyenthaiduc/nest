/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';

@Entity()

export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password : string;
}
