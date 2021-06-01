import { Logger, Module } from '@nestjs/common';
import { AppConfigModule } from 'src/common/config';
import { CoreModule } from 'src/core/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppConfigModule, CoreModule],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
