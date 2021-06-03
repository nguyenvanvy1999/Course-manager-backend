import { Module } from '@nestjs/common';
import { AppConfigModule } from './config';
import { MongoModule } from './mongo';

@Module({
  imports: [MongoModule, AppConfigModule],
})
export class CommonModule {}
