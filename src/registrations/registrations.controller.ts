import { Body, Controller, Param, Post, Get } from "@nestjs/common";
import { RegistrationsService } from "./registrations.service";
import { RegistrationDto } from "src/dto/create-registration.dto";
import { Registration } from "./registration.entity";

@Controller('registrations')
export class RegistrationsController {
    constructor(private readonly registrationsService: RegistrationsService) { }

    @Post()
    register(@Body() registrationDto: RegistrationDto) {
        const registration = new Registration();
        registration.userId = registrationDto.userId;
        registration.eventId = registrationDto.eventId;

        return this.registrationsService.register(registration);
    }

    @Get()
    findByUserid() {
        return this.registrationsService.find();
    }
}