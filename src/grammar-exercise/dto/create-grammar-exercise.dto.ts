import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsNotEmpty } from 'class-validator';

export class CreateExerciseDto {
  @ApiProperty({ example: 'Thì hiện tại đơn', description: 'Chủ đề ngữ pháp' })
  @IsString()
  @IsNotEmpty()
  topic: string;

  @ApiProperty({
    example: [
      { question: 'She ___ to school every day.', options: ['go', 'goes', 'going'], correctAnswer: 'goes' }
    ],
    description: 'Danh sách câu hỏi'
  })
  @IsArray()
  @IsNotEmpty()
  questions: { question: string; options: string[]; correctAnswer: string }[];
}