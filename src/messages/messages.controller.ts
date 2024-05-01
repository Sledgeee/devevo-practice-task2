import { Body, Controller, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { AddDto, IdDto, UpdateDto } from './dto';
import { GetAllResponse, GetResponse, StatusResponse } from '../common/types';
import { Message } from '@prisma/client';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post('add')
  add(@Body() dto: AddDto): StatusResponse {
    return this.messagesService.add(dto);
  }

  @Post('get')
  get(@Body() dto: IdDto): GetResponse<Message> {
    return this.messagesService.get(dto.id);
  }

  @Post('update')
  update(@Body() dto: UpdateDto): StatusResponse {
    return this.messagesService.update(dto);
  }

  @Post('get_all')
  getAll(): GetAllResponse<Message> {
    return this.messagesService.getAll();
  }

  @Post('delete')
  delete(@Body() dto: IdDto): StatusResponse {
    return this.messagesService.delete(dto.id);
  }
}
