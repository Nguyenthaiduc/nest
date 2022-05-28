/* eslint-disable */
import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

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
  createAt : Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
