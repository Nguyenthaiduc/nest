/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn,BaseEntity } from 'typeorm';

@Entity()
export class Report extends BaseEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    price : number;

}
