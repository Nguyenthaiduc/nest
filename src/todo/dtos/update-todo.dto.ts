/* eslint-disable */
import { IsString, IsOptional, IsBoolean } from 'class-validator';
export class UpdateTodoDto {

  @IsString()
  // @IsOptional()
  readonly title: string;

  @IsBoolean()
  // @IsOptional()
  readonly completed?: boolean;

  @IsString()
  // @IsOptional()
  readonly description?: string;

}
