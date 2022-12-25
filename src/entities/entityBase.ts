import { Column, PrimaryGeneratedColumn } from "typeorm";

export class EntityBase{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creation: Date = new Date();

    @Column()
    modifies: Date = new Date();

}