import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { CourseModule } from './course/course.module';
import { RoleModule } from './role/role.module';
import { StreamModule } from './stream/stream.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    UserModule,
    AccountModule,
    RoleModule,
    CourseModule,
    VideoModule,
    StreamModule,
  ],
})
export class CoreModule {}
