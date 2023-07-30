import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  taskName: any;
  taskStatus: any;
  async onModuleInit() {
    await this.$connect();
  }
}
