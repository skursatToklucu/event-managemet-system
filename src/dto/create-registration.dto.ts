import { ApiProperty } from "@nestjs/swagger";

export class RegistrationDto {

    @ApiProperty()
    userId: string;

    @ApiProperty()
    eventId: string;
}