import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule, AppConfigService } from '../config';
import { mongoOption } from './mongo.option';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (config: AppConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
        ...mongoOption,
      }),
      inject: [AppConfigService],
    }),
  ],
})
export class MongoModule {}
