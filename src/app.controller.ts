import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TodoValidation } from './todo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('csit')
  getCsit() {
    return 'hello csit...';
  }

  @Post('todo')
  addTodo(@Body() todoBody: TodoValidation) {
    return todoBody;
  }

  @Patch('todo')
  patchTodo() {
    return 'Patch Todo';
  }

  @Delete('todo')
  deleteTodo() {
    return 'Delete Todo';
  }
}
