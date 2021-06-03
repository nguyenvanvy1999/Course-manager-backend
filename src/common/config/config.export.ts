import 'dotenv/config';
import { JwtConfigInterface } from './interfaces';

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}
  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }
    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  get host(): string {
    return this.getValue('HOST', true);
  }

  get port(): number {
    return parseInt(this.getValue('PORT', true));
  }

  get nodeEnv(): string {
    return this.getValue('NODE_ENV', true);
  }

  get mongoUri(): string {
    return this.getValue('MONGO_URI');
  }

  public isProduction(): boolean {
    return this.getValue('NODE_ENV', false) === 'production';
  }

  public isDevelopment(): boolean {
    return this.getValue('NODE_ENV', false) === 'development';
  }

  public getJwtConfig(): JwtConfigInterface {
    return {
      secret: this.getValue('JWT_SECRET'),
      signOptions: { expiresIn: '15m' },
    };
  }
}

export const configService = new ConfigService(process.env).ensureValues([]);
