/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class User {
  @Column()
  id: number;
  
  @Column()
  email: string;

  @Column()
  password : string;
}
