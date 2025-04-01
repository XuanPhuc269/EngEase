import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

type AuthInput = { username: string; password: string };
type SignInData = { userId: number, username: string };
type AuthResult = { accessToken: string, userId: number; username: string };

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async authenicate(input: AuthInput): Promise<AuthResult> {
        const user = await this.validateUser(input);

        if (!user) {
            throw new UnauthorizedException();
        }

        return {
            accessToken: 'fake-access',
            userId: user.userId,
            username: user.username
        };
    }

    async validateUser(input: AuthInput): Promise<SignInData | null> {
        const user = await this.userService.findUserByName(input.username);

        if (user && user.password === input.password) {
            return {
                userId: user.userId,
                username: user.username,
            };
        }

        return null;
    }
}
