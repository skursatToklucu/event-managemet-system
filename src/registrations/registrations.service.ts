import { Injectable } from "@nestjs/common";
import { Registration } from "./registration.entity";
import { v4 as uuidv4 } from "uuid";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RegistrationsService {
    constructor(
        @InjectRepository(Registration)
        private registrationRepository: Repository<Registration>
    ) { }

    async register(registrationDto: { userId: string, eventId: string }): Promise<Registration> {
        const registration = new Registration();
        registration.id = uuidv4();
        registration.userId = registrationDto.userId;
        registration.eventId = registrationDto.eventId;

        await this.registrationRepository.save(registration);
        return registration;
    }

    async find(): Promise<Registration[]> {
        return this.registrationRepository.find();
    }
}