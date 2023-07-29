import { IsEmail, IsNumber } from 'class-validator';

export class TodoValidation {
  @IsEmail()
  email: string;

  @IsNumber()
  todo_number: number;
}
