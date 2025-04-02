import { OmitType, ApiProperty } from "@nestjs/swagger"
import { GrammarExerciseDto } from "./grammar-exercise.dto"

export class CreateGrammarExerciseDto extends OmitType(GrammarExerciseDto, ['topic', 'number_of_questions']) {
  
    @ApiProperty({
        example: {
          topic: "present simple",
          number_of_questions: 2,
          questions: [
            {
              question: "Which sentence is correct in present simple?",
              options: [
                "He go to school every day.",
                "He goes to school every day.",
                "He going to school every day."
              ],
              correctAnswer: "B"
            },
            {
              question: "What is the negative form of 'She likes ice cream'?",
              options: [
                "She do not like ice cream.",
                "She does not likes ice cream.",
                "She does not like ice cream."
              ],
              correctAnswer: "C"
            }
          ]
        }
      })
      example: string;
}