import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigService } from './config.service';
import { configModuleSetup } from './config.setup';

@Global()
@Module({
  imports: [ConfigModule.forRoot(configModuleSetup)],
  providers: [AppConfigService, ConfigService],
  exports: [AppConfigService],
})
export class AppConfigModule {}
