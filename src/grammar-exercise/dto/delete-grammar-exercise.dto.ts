import { ApiProperty } from "@nestjs/swagger";

export class DeleteGrammarExerciseDto {
    @ApiProperty({
        description: 'ID của câu hỏi ngữ pháp',
    })
    questionId: number;
}