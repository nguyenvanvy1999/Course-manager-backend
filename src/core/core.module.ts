import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { CourseModule } from './course/course.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AccountModule, RoleModule, CourseModule],
})
export class CoreModule {}
