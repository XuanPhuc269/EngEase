import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-users-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) { }

    // Create user 
    async create(CreateUserDto: CreateUserDto): Promise<Users> {
        const newUser = this.usersRepository.create(CreateUserDto);
        return await this.usersRepository.save(newUser);
    }

    // Find user by username
    async findUserByName(username: string): Promise<Users | undefined> {
        const user = await this.usersRepository.findOne({ where: { username } });
        return user || undefined;
    }
}
