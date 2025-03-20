import { Module } from '@nestjs/common';
import { GrammarExerciseController } from './grammar-exercise.controller';
import { GrammarExerciseService } from './grammar-exercise.service';

@Module({
  controllers: [GrammarExerciseController],
  providers: [GrammarExerciseService]
})
export class GrammarExerciseModule {}
