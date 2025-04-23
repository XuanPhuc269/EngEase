import { Controller, Get, Post, Body, NotFoundException, UseGuards, Request, Delete, Param } from '@nestjs/common';
import { GrammarExerciseService } from './grammar-exercise.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiOkResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { GrammarExerciseDto } from './dto/grammar-exercise.dto';
import { ValidationError } from 'class-validator';
import { CreateGrammarExerciseDto } from './dto/create-grammar-exercise.dto';
import { JwtAuthGuard } from 'src/auth/guards/auth.guards';
import { request } from 'http';
import { DeleteGrammarExerciseDto } from './dto/delete-grammar-exercise.dto';


@ApiTags('Grammar Exercises')
@ApiBearerAuth()
@Controller('grammar-exercise')
export class GrammarExerciseController {
  constructor(private readonly exerciseService: GrammarExerciseService) {}

  @Post('create')
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
  async create(@Request() request, @Body() body: GrammarExerciseDto) {
    return await this.exerciseService.create(body.topic, body.number_of_questions, request.user.userId);
  }

  @Get('get')
  @UseGuards(JwtAuthGuard) // Require JWT authentication to access
  @ApiOperation({ summary: 'Lấy danh sách bài tập' })
  @ApiOkResponse({ 
    description: 'Lấy danh sách bài tập thành công', 
    type: CreateGrammarExerciseDto, 
    isArray: true 
  })
  @ApiNotFoundResponse({ description: 'Không tìm thấy bài tập nào' })
  async findAll(@Request() request) {
    const userId = request.user.userId;
    const exercises = await this.exerciseService.findAllByUser(userId);
    if (exercises.length === 0) {
      throw new NotFoundException('Không tìm thấy bài tập nào');
    }
    return exercises;
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Xóa bài tập ngữ pháp' })
  @ApiOkResponse({ description: 'Xóa bài tập thành công' })
  @ApiNotFoundResponse({ description: 'Không tìm thấy bài tập để xóa' })
  async delete(@Request() request, @Param('id') id: number, @Body() body: DeleteGrammarExerciseDto) {
    const questionId = body;
    return await this.exerciseService.deleteQuestionById(id);
  }    
}
