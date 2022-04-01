import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallbackModule } from './callback/callback.module';

@Module({
  imports: [CallbackModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
