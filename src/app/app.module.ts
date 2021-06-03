import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { CoreModule } from 'src/core/core.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CommonModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
