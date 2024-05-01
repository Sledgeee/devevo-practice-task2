import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v',
    defaultVersion: '1',
  });

  app.use(helmet());
  app.use(helmet.noSniff());
  app.use(helmet.hidePoweredBy());
  app.use(helmet.contentSecurityPolicy());

  app.setGlobalPrefix('/api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const host = configService.get('HOST');

  await app.listen(port, host);
}
bootstrap();
