import { Test, TestingModule } from '@nestjs/testing';
import { GrammarExerciseService } from './grammar-exercise.service';

describe('GrammarExerciseService', () => {
  let service: GrammarExerciseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrammarExerciseService],
    }).compile();

    service = module.get<GrammarExerciseService>(GrammarExerciseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
