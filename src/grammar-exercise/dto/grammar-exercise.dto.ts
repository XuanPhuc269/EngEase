import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class GrammarExerciseDto {
  @ApiProperty({
    description: 'Chủ đề ngữ pháp',
    examples: {
      presentSimple: { summary: 'Return Present Simple exercises', value: 'Thì hiện tại đơn' },
      pastSimple: { summary: 'Return Past Simple exercises', value: 'Thì quá khứ đơn' },
      conditionalType1: { summary: 'Return Conditional Sentence Type I exercises', value: 'Câu điều kiện loại 1' }
    }
  })  
  @IsString()
  @IsNotEmpty()
  topic: string;

  @ApiProperty({
    description: 'Số lượng câu hỏi',
    examples: {
      five: { summary: 'Return 5 questions', value: 5 },
      ten: { summary: 'Return 10 questions', value: 10 },
      twenty: { summary: 'Return 20 questions', value: 20 }
    }
  })

  @IsNumber()
  @IsNotEmpty()
  number_of_questions: number;
}