import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { AddDto, UpdateDto } from './dto';
import { GetAllResponse, GetResponse, StatusResponse } from 'src/common/types';
import { Message } from '@prisma/client';

@Injectable()
export class MessagesService {
  private readonly logger = new Logger(MessagesService.name);

  constructor(private readonly prisma: PrismaService) {}

  async add(dto: AddDto): StatusResponse {
    try {
      const createdMessage = await this.prisma.message.create({
        data: dto,
        select: { id: true },
      });

      this.logger.log(`Created new item with id (${createdMessage.id})`);

      return { status: 0 };
    } catch (e: unknown) {
      this.logger.error(e);
      return { status: 1 };
    }
  }

  async update(dto: UpdateDto): StatusResponse {
    try {
      if (!dto.name && !dto.text) {
        throw new BadRequestException('Invalid payload');
      }

      const updatedMessage = await this.prisma.message.update({
        where: { id: dto.id },
        data: dto,
        select: { id: true },
      });

      this.logger.log(`Updated item with id (${updatedMessage.id})`);

      return { status: 0 };
    } catch (e: unknown) {
      this.logger.error(e);
      return { status: 1 };
    }
  }

  get(id: number): GetResponse<Message> {
    return this.prisma.message.findUnique({ where: { id } });
  }

  getAll(): GetAllResponse<Message> {
    return this.prisma.message.findMany();
  }

  async delete(id: number): StatusResponse {
    try {
      const deletedMessage = await this.prisma.message.delete({
        where: { id },
        select: { id: true },
      });

      this.logger.log(`Deleted item with id (${deletedMessage.id})`);

      return { status: 0 };
    } catch (e: unknown) {
      this.logger.error(e);
      return { status: 1 };
    }
  }
}
