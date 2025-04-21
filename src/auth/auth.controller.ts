import { Controller, HttpCode, HttpStatus, Post, Body, UseGuards, NotImplementedException, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/auth.guards';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiBearerAuth()
@ApiTags('Authentication')
export class AuthController {
    constructor(private authServices: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiOperation({ summary: 'Đăng nhập' })
    @ApiResponse({
        status: 200,
        description: 'Đăng nhập thành công',
        schema: {
            example: {
                accessToken: 'abcxyz123456',
                username: 'username123',
                userId: '123'
            },
        },
    })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    login(@Body() loginDto: LoginDto) {
        return this.authServices.authenicate(loginDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    @ApiOperation({ summary: 'Lấy thông tin người dùng' })
    @ApiResponse({
        status: 200,
        description: 'Lấy thông tin người dùng thành công',
        schema: {
            example: {
                userId: '123',
                username: 'username123',
            },
        }
    })
    getUserInfo(@Request() request) {
        return request.user
    }
}
