import { Logger, Module } from '@nestjs/common';
import { AppConfigModule } from 'src/common/config';
import { UserModule } from 'src/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppConfigModule, UserModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
