/* eslint-disable */
import { Type } from 'class-transformer';
import { IsString, IsNumber, IsBoolean, IsDate } from 'class-validator';
export class CreateTodoDto {
  @Type(() => Number)
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsBoolean()
  readonly completed?: boolean;

  @IsString()
  readonly description?: string;

  @IsDate()
  readonly createAt?: Date;

  @IsDate()
  readonly updateAt?: Date;
}
