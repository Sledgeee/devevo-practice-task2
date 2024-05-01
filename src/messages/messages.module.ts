import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
  imports: [PrismaModule],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}
