import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateGrammarExerciseDto {
  @ApiProperty({
    description: 'Chủ đề ngữ pháp',
    example: 'Thì hiện tại đơn',
    examples: {
      presentSimple: { summary: 'Thì hiện tại đơn', value: 'Thì hiện tại đơn' },
      pastSimple: { summary: 'Thì quá khứ đơn', value: 'Thì quá khứ đơn' },
      conditionalType1: { summary: 'Câu điều kiện loại 1', value: 'Câu điều kiện loại 1' }
    }
  })  
  @IsString()
  @IsNotEmpty()
  topic: string;
}