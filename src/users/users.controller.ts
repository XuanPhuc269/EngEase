import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users-dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post('create')
        async createUser(@Body() createUserDto: CreateUserDto) {
            await this.userService.create(createUserDto);
            return {message: 'User created successfully'};
    }
        
    @Post('login')
        async loginUser(@Body() createUserDto: CreateUserDto) {
            const user = await this.userService.findUserByName(createUserDto.username);
            if (!user) {
                return {message: 'User not found'};
            }
            if (user.password !== createUserDto.password) {
                return {message: 'Invalid password'};
            }
            return {message: 'Login successful'};
    }
}
