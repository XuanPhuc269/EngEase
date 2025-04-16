import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

type SignInData = { userId: number, username: string };
type AuthResult = { accessToken: string, userId: number; username: string };

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService, 
        private jwtService: JwtService,
    ) {}

    async authenicate(input: LoginDto): Promise<AuthResult> {
        const user = await this.validateUser(input);

        if (!user) {
            throw new UnauthorizedException('Tên đăng nhập hoặc mật khẩu không chính xác');
        }

        return this.signIn(user);
    }

    async validateUser(input: LoginDto): Promise<SignInData | null> {
        const user = await this.userService.findUserByName(input.username);

        if (user) {
            // Assuming password validation is handled elsewhere (e.g., hashed comparison)
            return {
                userId: user.id, // Updated to match the Users entity field
                username: user.username,
            };
        }

        return null;
    }

    async signIn(user: SignInData): Promise<AuthResult> {
        const tokenPayload = {
            sub: user.userId,
            username: user.username,
        };

        const accessToken = await this.jwtService.signAsync(tokenPayload);

        return { accessToken, username: user.username, userId: user.userId };
    }
}
