import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Registration {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    userId: string;

    @Column()
    eventId: string;
}