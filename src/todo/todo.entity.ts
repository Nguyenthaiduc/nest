/* eslint-disable */
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  completed?: boolean;

  @Column()
  description?: string;

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @ManyToOne(()=> User, (user)=> user.reports)
  user : User;
}

