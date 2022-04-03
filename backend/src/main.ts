import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const config = await app.get(ConfigService)
  const port = config.get<number>('API_PORT') || 3000
  console.log('port', config.get<number>('API_PORT'))
  await app.listen(port, () => {
    console.log('App started on port: ' + port)
  });
}
bootstrap();
