import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  arr = [];

  @Post()
  addTask(@Body() taskBody: CreateTaskDto) {
    this.arr.push(taskBody);
    return 'success';
  }

  @Get()
  getTasks() {
    return this.arr;
  }

  @Get(':taskname')
  searchTask(@Param('taskname') taskname: string) {
    return this.arr.find((task) => task.taskname === taskname);
  }
}
