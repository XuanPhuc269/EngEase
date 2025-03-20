import { IsArray, IsNotEmpty, IsString, Validate, ValidateNested } from "class-validator";
import { ChatCompletion } from "openai/resources";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ChatCompletionMessagesDto {
    @ApiProperty({
        description: 'The role of the message',
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    role: string;

    @ApiProperty({
        description: 'The content of the message',
        type: String,
    })
    @IsString()
    @IsNotEmpty()
    content: string;
}

export class CreateChatCompletionRequest {
    @ApiProperty({
        description: 'The messages to include in the chat completion',
        type: [ChatCompletionMessagesDto],
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ChatCompletionMessagesDto)
    messages: ChatCompletionMessagesDto[];
}

