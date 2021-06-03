import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers';
import {
  Admin,
  AdminSchema,
  Mod,
  ModSchema,
  Supporter,
  SupporterSchema,
  User,
  UserSchema,
} from './models';
import { UserService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Admin.name, schema: AdminSchema },
      { name: Mod.name, schema: ModSchema },
      { name: Supporter.name, schema: SupporterSchema },
    ]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
