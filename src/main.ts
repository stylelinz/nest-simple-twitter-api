import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

const APP_PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
    cors: false,
  });

  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  const logger = app.get(Logger);

  app.useLogger(logger);
  app.flushLogs();

  await app.listen(3000);
  logger.log(`Service start at http://localhost:${APP_PORT}`);
}
bootstrap();
