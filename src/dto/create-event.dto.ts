import { ApiProperty } from "@nestjs/swagger";

export class EventDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    location: string;

    @ApiProperty()
    description: string;
}