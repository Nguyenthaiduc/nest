/* eslint-disable */
import { IsString, IsNumber, IsBoolean, IsDate, Min } from 'class-validator';
export class CreateTodoDto {
  @IsNumber()
  @Min(1)
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsBoolean()
  readonly completed?: boolean;

  @IsString()
  readonly description?: string;

  @IsDate()
  readonly createAt: Date;

  @IsDate()
  readonly updateAt: Date;
}
