import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { RoleModule } from './role/role.module';
import { SubtitleModule } from './subtitle/subtitle.module';
import { UserModule } from './user/user.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    UserModule,
    AccountModule,
    RoleModule,
    CourseModule,
    VideoModule,
    SubtitleModule,
    AuthModule,
  ],
})
export class CoreModule {}
