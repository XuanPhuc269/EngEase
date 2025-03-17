import { Controller } from '@nestjs/common';

@Controller('openai')
export class OpenaiController {
    @Post('chatCompletion')
    async createChatCompletion(@Body() chatCompletionDto: ChatCompletionDto) {
}
