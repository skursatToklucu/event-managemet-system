import { Controller, Get, Post, Body } from "@nestjs/common";
import { EventsService } from "./events.service";
import { Event } from "./event.entity";
import { EventDto } from "src/dto/create-event.dto";

@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Post()
    create(@Body() eventDto: EventDto) {
        const event = new Event();
        event.name = eventDto.name;
        event.location = eventDto.location;
        event.description = eventDto.description;

        this.eventsService.create(eventDto);
    }

    @Get()
    findAll(): Promise<Event[]> {
        return this.eventsService.findAll();
    }
}