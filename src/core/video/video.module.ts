import { Module, CACHE_MANAGER, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoController } from './controllers';
import { Video, VideoSchema } from './models';
import { VideoService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
  ],
  providers: [VideoService, { provide: CACHE_MANAGER, useClass: CacheModule }],
  controllers: [VideoController],
  exports: [VideoService],
})
export class VideoModule {}
