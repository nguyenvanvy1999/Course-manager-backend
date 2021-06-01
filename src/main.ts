import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { HttpExceptionsFilter } from './common/exceptions';
import { AppLogger } from './common/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: AppLogger });
  await app.listen(3000);
  app.useGlobalFilters(new HttpExceptionsFilter());
}
bootstrap();
