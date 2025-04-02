import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @ApiProperty({
        example: 'Bob', 
        description: 'Tên đăng nhập'
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        example: 'password123',
        description: 'Mật khẩu'
    })
    @IsString()
    @IsNotEmpty()
    password: string; 
}