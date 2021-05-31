import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return parseInt(this.configService.get('PORT'));
  }

  public isEnv(env: string): boolean {
    return this.configService.get('NODE_ENV') === env;
  }
}
