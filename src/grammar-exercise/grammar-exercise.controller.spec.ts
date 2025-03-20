import { Test, TestingModule } from '@nestjs/testing';
import { GrammarExerciseController } from './grammar-exercise.controller';

describe('GrammarExerciseController', () => {
  let controller: GrammarExerciseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrammarExerciseController],
    }).compile();

    controller = module.get<GrammarExerciseController>(GrammarExerciseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
