import { Injectable } from '@nestjs/common';
import { UserService } from 'src/core/user/services';
import { Connection } from 'mongoose';
import { AppLogger } from 'src/common/logger';
@Injectable()
export class AuthService {
  constructor(private readonly connection: Connection) {}

  public async validateUser(username: string, password: string): Promise<any> {
    try {
    } catch (error) {
      AppLogger.error(error);
      return null;
    }
  }

  public async validateJwtUser({ userId, username }): Promise<any> {
    try {
    } catch (error) {
      AppLogger.error(error);
      return null;
    }
  }
}
