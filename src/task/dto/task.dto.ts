import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  taskname: string;

  @IsBoolean()
  taskStatus: boolean;
}
