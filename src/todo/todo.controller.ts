/* eslint-disable */
import {
  Controller,
  Body,
  Post,
  Get,
  Patch,
  Delete,
  Query,
  Param,
  UseGuards,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { Todo } from './todo.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { UpdateTodoDto } from './dtos/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  //add a todo
  @Post()
  @UseGuards(AuthGuard)
  async createTodo(@Body() body: CreateTodoDto) {
    return await this.todoService.create(body);
  }
  //get all todo
  @Get()
  async getAllTodos() {
    console.log(this.todoService.find());
    return await this.todoService.find();
  }
  //get a todo
  @Get('/:id')
  async getTodo(@Param('id') id: string): Promise<Todo> {
    return await this.todoService.findOne(parseInt(id));
  }
  //get a todo by title
  @Get('/title/:title')
  async getTodoByTitle(@Param('title') title: string): Promise<Todo[]> {
    return await this.todoService.findTitle(title);
  }
  //update a todo
  @Patch('/:id')
  @UseGuards(AuthGuard)
  async updateTodo(
    @Param('id') id: string,
    @Body() body: { title?: string; completed?: boolean; description?: string },
  ): Promise<Todo> {
    return await this.todoService.update(parseInt(id), body);
  }
  //delete a todo
  @Delete('/:id')
  @UseGuards(AuthGuard)
  async deleteTodo(@Param('id') id: string): Promise<Todo> {
    return await this.todoService.remove(parseInt(id));
  }
}
