import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
 import { MessageRepository } from '../domain/entities/message.repository';
import { Message } from '../domain/entities/message.entity';
 

@Injectable()
export class MessageRepositoryImpl implements MessageRepository {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async findById(id: string): Promise<Message | null> {
    return this.messageRepository.findOne({ where: { id: Number(id) } });
  }

  async save(message: Message): Promise<Message> {
    return this.messageRepository.save(message);
  }
}
