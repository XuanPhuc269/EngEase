import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrammarExercise } from './entity/grammar-exercise.entity';
import { Users } from 'src/users/entity/users.entity';
import { generateGrammarExercisePrompt } from './grammar-exercise-prompt';


@Injectable()
export class GrammarExerciseService {
  private openai: OpenAI;

  constructor(
    @InjectRepository(GrammarExercise)
    private readonly grammarExerciseRepository: Repository<GrammarExercise>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }


  async generateQuestions(topic: string, number_of_questions: number) {
    const prompt = generateGrammarExercisePrompt(topic, number_of_questions);

    const response = await this.openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });

    const rawResponse = response.choices[0].message?.content || '{}';

    // Tìm và trích xuất nội dung JSON nếu OpenAI trả về văn bản mô tả
    const jsonMatch = rawResponse.match(/\[.*\]/s);
    const questions = jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    return questions;
  }

  async create(topic: string, number_of_questions: number, userId: number) {
    const questions = await this.generateQuestions(topic, number_of_questions);
    const user = await this.usersRepository.findOne({ where: { id: userId } });

    if (!user) throw new Error('User not found');

    const exercise = this.grammarExerciseRepository.create({
      topic,
      questions,
      user,
    });

    return await this.grammarExerciseRepository.save(exercise);
  }

  findAll() {
    return this.grammarExerciseRepository.find({
      relations: ['user'],
    });
  }
}