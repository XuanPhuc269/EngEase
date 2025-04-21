import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UserDto {
    @ApiProperty({
        description: 'Tên người dùng',
        example: 'user123'
    })
    @IsNotEmpty()
    @IsString()
    username: string;

    
    @ApiProperty({
        description: 'Mật khẩu người dùng',
        example: 'password123'
    })
    @IsNotEmpty()
    @IsString()
    password: string;
}