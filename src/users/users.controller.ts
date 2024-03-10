import { Body, Controller, Param, Post, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from './user.entity';
import { CreateUserDto } from "src/dto/create-user.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    create(@Body() userDto: CreateUserDto) {
        const user = new User();
        user.username = userDto.username;
        user.password = userDto.password;
        user.email = userDto.email;
        return this.usersService.create(user);
    }

    @Get(':username')
    findByUsername(@Param('username') username: string) {
        return this.usersService.findByUsername(username);
    }

}