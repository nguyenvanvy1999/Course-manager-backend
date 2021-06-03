import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubtitleController } from './controllers';
import { Subtitle, SubtitleSchema } from './models';
import { SubtitleService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subtitle.name, schema: SubtitleSchema },
    ]),
  ],
  providers: [SubtitleService],
  controllers: [SubtitleController],
  exports: [SubtitleService],
})
export class SubtitleModule {}
