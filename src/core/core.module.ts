import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, AccountModule],
  providers: [],
  controllers: [],
  exports: [],
})
export class CoreModule {}
