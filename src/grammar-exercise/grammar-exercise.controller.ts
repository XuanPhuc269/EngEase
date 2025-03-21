import { Controller, Get, Post, Body } from '@nestjs/common';
import { GrammarExerciseService } from './grammar-exercise.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { CreateGrammarExerciseDto } from './dto/create-grammar-exercise.dto';


@ApiTags('Grammar Exercises')
@ApiBearerAuth()
@Controller('grammar-exercise')
export class GrammarExerciseController {
  constructor(private readonly exerciseService: GrammarExerciseService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo bài tập ngữ pháp bằng OpenAI' })
  @ApiResponse({ status: 201, description: 'Bài tập đã được tạo' })
  @ApiResponse({ status: 400, description: 'Unauthorized' })
  async create(@Body() body: CreateGrammarExerciseDto) {
    return await this.exerciseService.create(body.topic);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách bài tập' })
  findAll() {
    return this.exerciseService.findAll();
  }
}