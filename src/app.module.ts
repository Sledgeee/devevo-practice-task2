import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './messages';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    MessagesModule,
  ],
})
export class AppModule {}
