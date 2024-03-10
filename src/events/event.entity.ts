import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    name: string;

    @Column()
    date: Date;

    @Column()
    location: string;

    @Column()
    description: string;
}