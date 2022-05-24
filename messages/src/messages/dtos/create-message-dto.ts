/* eslint-disable */
import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  content: string;
}
