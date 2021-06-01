import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers';
import { Admin, Mod, Supporter, User } from './entities';
import { UserService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([User, Mod, Admin, Supporter])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
