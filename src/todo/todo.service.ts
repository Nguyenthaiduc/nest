/* eslint-disable */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dtos/create-todo.dto';

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private repo: Repository<Todo>) { }

    //Get All Todo
    async find({title}: CreateTodoDto) {
        return await this.repo.createQueryBuilder()
            .select('*')
            .where('title = :title',{title})
            .getRawMany();
    }

    //Get a Todo
    async findOne(id : number): Promise<Todo> {
        const todo = await this.repo.findOne({where : {id}});
        if(!todo) {
            throw new NotFoundException("Todo Not Found");
        }
        return todo;
    }

    //Get Todo by title
    async findTitle(title : string) {
        const todo = await this.repo.find({"title":title});
        if(!todo) {
            throw new NotFoundException("Title Not Found");
        }
        return todo;
    }

    //Add a Todo
    async create(createTodoDto: CreateTodoDto) {
       const todo = this.repo.create(createTodoDto);
        if(!todo) {
            throw new NotFoundException("Can't create Todo")
        }

       return this.repo.save(todo);
       
    }

    //Update Todo
    async update(id: number, attrs: Partial<Todo>): Promise<Todo> {
        const todo = await this.findOne(id);
        if(!todo) {
            throw new NotFoundException('Todo Not Found');
        }
        Object.assign(todo, attrs);
        return this.repo.save(todo);
    }

    //Delete Todo
    async remove(id : number): Promise<Todo> {
        const todo = await this.repo.findOne(id);
        if(!todo) {
            throw new NotFoundException("Todo Not Found");
        }
        return this.repo.remove(todo);
    }

}
