/* eslint-disable */
import {AfterInsert,AfterRemove,AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsString } from 'class-validator';
import console from 'console';

@Entity()

export class User {
  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password : string;

  @AfterInsert()
  logInsert(){
    console.log("Inserted user with id ",this.id);
  }

  @AfterUpdate()
  logUpdate(){
    console.log('Updated User with id',this.id);
  }

  @AfterRemove()
  logRemove(){
    console.log("Remove User with id",this.id);
  }
}
