/* eslint-disable */
import { Entity, Column, PrimaryGeneratedColumn,BaseEntity } from 'typeorm';

@Entity()
export class Report extends BaseEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    price : number;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    lng: number;

    @Column()
    lat: number;

    @Column()
    mileage: number;

}
