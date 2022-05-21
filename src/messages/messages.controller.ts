/* eslint-disable */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    //DON'T DO THIS ON REAL APP
    //USE DEPENDENCIES INJECTION
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessages(@Param() id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message is not found');
    }

    return message;
  }
}