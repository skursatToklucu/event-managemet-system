import { Injectable } from "@nestjs/common";
import { Event } from "./event.entity";
import { v4 as uuidv4 } from "uuid";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(Event)
        private eventRepository: Repository<Event>
    ) { }

    async create(evenDto: { name: string; location: string; description: string }): Promise<Event> {
        var event = new Event();
        event.id = uuidv4();
        event.date = new Date();
        event.name = evenDto.name;
        event.location = evenDto.location;
        event.description = evenDto.description;

        await this.eventRepository.save(event);
        return event;
    }

    async findAll(): Promise<Event[]> {
        return this.eventRepository.find();
    }
}