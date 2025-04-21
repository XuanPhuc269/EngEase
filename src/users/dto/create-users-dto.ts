import { ApiProperty, OmitType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { UserDto } from "./users-dto";

export class CreateUserDto extends OmitType(UserDto, ['username', 'password']) {
    @ApiProperty({
        example: "Tạo tài khoản người dùng mới thành công",
    })
    example: string;
}