import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
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

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('NODE_ENV', false);
    return mode != 'development';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      entities: [
        join(__dirname, '../../core', '**', '*.entity.{ts,js}'),
        join(__dirname, '../../core', '**', 'model.{ts,js}'),
        join(__dirname, '../../core', '**', '.model.{ts,js}'),
      ],
      migrationsTableName: 'migration',
      migrations: [join(__dirname, '../migration', '*.{ts,js}')],
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: this.isProduction(),
    };
  }

  public getJwtConfig(): JwtConfigInterface {
    return {
      secret: this.getValue('JWT_SECRET'),
      signOptions: { expiresIn: '15m' },
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
]);

export { configService };
