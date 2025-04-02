import { Controller, HttpCode, HttpStatus, Post, Body, UseGuards, NotImplementedException, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/auth.guards';

@Controller('auth')
export class AuthController {
    constructor(private authServices: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body() input: { username: string; password: string }) {
        return this.authServices.authenicate(input);
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getUserInfo(@Request() request) {
        return request.user
    }
}
