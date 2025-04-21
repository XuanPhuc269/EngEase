import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GrammarExercise } from './entity/grammar-exercise.entity';
import { Users } from 'src/users/entity/users.entity';


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
    const prompt = `Trả lời dưới dạng JSON thuần, không có văn bản mô tả. Tạo "${number_of_questions}" câu hỏi trắc nghiệm về chủ đề ngữ pháp "${topic}" dành cho học sinh trung học cơ sở ở Việt Nam. 
    Mỗi câu hỏi có 3 đáp án và chỉ một đáp án đúng. Định dạng:
    [
    { "question": "Câu hỏi 1", "options": ["A", "B", "C"], "correctAnswer": "A" },
    { "question": "Câu hỏi 2", "options": ["D", "E", "F"], "correctAnswer": "D" }
    ]`;

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