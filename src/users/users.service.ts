import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entity/users.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/users-dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly usersRepository: Repository<Users>,
    ) { }

    // Create user 
    async create(user: UserDto): Promise<Users> {
        const newUser = this.usersRepository.create(user);
        return await this.usersRepository.save(newUser);
    }

    // Find user by username
    async findUserByName(username: string): Promise<Users | undefined> {
        const user = await this.usersRepository.findOne({ where: { username } });
        return user || undefined;
    }
}
