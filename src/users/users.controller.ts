import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users-dto';
import { ApiCreatedResponse, ApiTags, ApiOperation, ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/auth.guards';
import { CreateUserDto } from './dto/create-users-dto';
import { ValidationError } from 'class-validator';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post('create')
    @ApiOperation({ summary: 'Tạo tài khoản người dùng mới' })
    @ApiCreatedResponse({
        description: 'Tạo tài khoản thành công',
        type: CreateUserDto,
    })
    @ApiBadRequestResponse({
        description: 'Thông tin tài khoản không hợp lệ',
        type: ValidationError
    })
    async createUser(@Body() body: UserDto) {
        if (!body.username || !body.password) {
            return { message: 'Yêu cầu điền vào tên tài khoản và mật khẩu' };
        }

        try {
            await this.userService.create(body);
            return { message: 'Tạo tài khoản người dùng mới thành công' };
        } catch (error) {
            if (error.message.includes('already exists')) {
                return { message: 'Tên người dùng đã tồn tại' };
            }
            return { message: 'Có lỗi xảy ra khi tạo tài khoản người dùng mới' };
        }
    }

}
