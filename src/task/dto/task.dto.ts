import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  taskName: string;

  @IsBoolean()
  taskStatus: boolean;
}
