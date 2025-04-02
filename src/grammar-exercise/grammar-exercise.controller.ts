import { Controller, Get, Post, Body, NotFoundException, UseGuards } from '@nestjs/common';
import { GrammarExerciseService } from './grammar-exercise.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiOkResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { GrammarExerciseDto } from './dto/grammar-exercise.dto';
import { ValidationError } from 'class-validator';
import { CreateGrammarExerciseDto } from './dto/create-grammar-exercise.dto';
import { JwtAuthGuard } from 'src/auth/guards/auth.guards';


@ApiTags('Grammar Exercises')
@ApiBearerAuth()
@Controller('grammar-exercise')
export class GrammarExerciseController {
  constructor(private readonly exerciseService: GrammarExerciseService) {}

  @Post()
  @UseGuards(JwtAuthGuard) // Protect API via JWT
  @ApiOperation({ summary: 'Tạo bài tập ngữ pháp bằng OpenAI' })
  @ApiCreatedResponse({ 
    description: 'Tạo bài tập thành công' ,
    type: CreateGrammarExerciseDto
  })
  @ApiBadRequestResponse({ 
    description: 'Thông tin điền vào không hợp lệ',
    type: ValidationError
  })
  async create(@Body() body: GrammarExerciseDto) {
    return await this.exerciseService.create(body.topic, body.number_of_questions);
  }

  @Get()
  @UseGuards(JwtAuthGuard) // Require JWT authentication to access
  @ApiOperation({ summary: 'Lấy danh sách bài tập' })
  @ApiOkResponse({ 
    description: 'Lấy danh sách bài tập thành công', 
    type: CreateGrammarExerciseDto, 
    isArray: true 
  })
  @ApiNotFoundResponse({ description: 'Không tìm thấy bài tập nào' })
  async findAll() {
    const exercises = await this.exerciseService.findAll();
    if (exercises.length === 0) {
      throw new NotFoundException('Không tìm thấy bài tập nào');
    }
    return exercises;
  }
}