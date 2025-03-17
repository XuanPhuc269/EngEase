import { IsArray, IsNotEmpty, IsString, Validate, ValidateNested } from "class-validator";
import { ChatCompletion } from "openai/resources";
import { Type } from "class-transformer";

export class CreateChatCompletionRequest {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => ChatCompletionMessagesDto)
    messages: ChatCompletionMessagesDto[];
}

export class ChatCompletionMessagesDto {
    @IsString()
    @IsNotEmpty()
    role: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}