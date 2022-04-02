import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor(
    @InjectPinoLogger(PrismaService.name) private readonly logger: PinoLogger,
  ) {
    super({ log: ['query', 'info', 'warn', 'error'] });
  }
  async onModuleInit(): Promise<void> {
    await this.$connect();
    this.logger.debug('prisma connected');
  }

  enableShutdownHooks(app: INestApplication): void {
    this.$on('beforeExit', async () => {
      this.logger.debug('disconnect prisma...\n');
      await app.close();
    });
  }
}
