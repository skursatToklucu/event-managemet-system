import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { v4 as uuidv4 } from "uuid";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }



    async create(userDto: { username: string, password: string; email: string }): Promise<User> {
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(userDto.password, saltOrRounds);

        const user = new User();
        user.id = uuidv4();
        user.username = userDto.username;
        user.password = hash;
        user.email = userDto.email;
        await this.usersRepository.save(user);
        return user;
    }

    async findByUsername(username: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { username } });
    }
}
