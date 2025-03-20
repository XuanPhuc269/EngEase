import { Controller, Body, Post } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dto/create-chat-completion.request';
import { OpenaiService } from './openai.service';
import { ApiTags, ApiOperation, ApiBody, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('openai')
@ApiBearerAuth()
@Controller('openai')
export class OpenaiController {
    constructor (private readonly openaiService: OpenaiService) {}

    @Post('chatCompletion')
    @ApiOperation({ summary: 'Create a chat completion' })
    @ApiBody({ type: CreateChatCompletionRequest })
    @ApiResponse({ status: 200, description: 'Chat completion created' })
    @ApiResponse({ status: 400, description: 'Unauthorized' })
    async createChatCompletion(
        @Body() body:  CreateChatCompletionRequest
    ) {
        return this.openaiService.createChatCompletion(body.messages);
    }
}
