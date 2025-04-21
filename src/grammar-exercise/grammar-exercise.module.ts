import { Module } from '@nestjs/common';
import { GrammarExerciseController } from './grammar-exercise.controller';
import { GrammarExerciseService } from './grammar-exercise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrammarExercise } from './entity/grammar-exercise.entity';
import { Users } from '../users/entity/users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GrammarExercise]), 
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [GrammarExerciseController],
  providers: [GrammarExerciseService],
  exports: [GrammarExerciseService],
})
export class GrammarExerciseModule {}
