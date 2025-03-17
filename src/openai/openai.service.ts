import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';
import { ChatCompletionMessagesDto } from './dto/create-chat-completion.request';
import { ChatCompletionMessageParam } from 'openai/resources';

@Injectable()
export class OpenaiService {
    constructor(private readonly openai: OpenAI) { }

    async createChatCompletion(
        messages: ChatCompletionMessagesDto[]
    ) {
        return this.openai.chat.completions.create({
            messages: messages as ChatCompletionMessageParam[],
            model: 'gpt-4o-mini',
        });
    }
}
