import { Module } from '@nestjs/common';
import { AuthController } from './controllers';
import { AuthService } from './services';

@Module({
  imports: [],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
