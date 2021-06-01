import { Module } from '@nestjs/common';
import { UserController, UserService } from './user';

@Module({
  imports: [],
  providers: [UserService],
  controllers: [UserController],
  exports: [],
})
export class CoreModule {}
