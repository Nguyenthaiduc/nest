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
  // @UseGuards(AuthGuard)
    createTodo(@Body() body: CreateTodoDto) : Promise<Todo> {
    return this.todoService.create(body);
  }
  //get all todo
  @Get()
   getAllTodos() {
    console.log(this.todoService.find());
    return  this.todoService.find();
  }
  //get a todo
  @Get('/:id')
   getTodo(@Param('id') id: string): Promise<Todo> {
    return  this.todoService.findOne(parseInt(id));
  }
  //get a todo by title
  @Get('/title/:title')
   getTodoByTitle(@Param('title') title: string): Promise<Todo[]> {
    return  this.todoService.findTitle(title);
  }
  //update a todo
  @Patch('/:id')
  @UseGuards(AuthGuard)
   updateTodo(
    @Param('id') id: string,
    @Body() body: UpdateTodoDto,
  ): Promise<Todo> {
    return  this.todoService.update(parseInt(id), body);
  }
  //delete a todo
  @Delete('/:id')
  // @UseGuards(AuthGuard)
   deleteTodo(@Param('id') id: string): Promise<Todo> {
    return  this.todoService.remove(parseInt(id));
  }
}
