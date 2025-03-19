import { Module } from '@nestjs/common';
import { ApplicationController } from './application/application.controller';
import { ApplicationService } from './application/application.service';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './domain/entities/message.entity';
import { MessageRepositoryImpl } from './infrastructure/message.repository.impl';

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([Message])],
    controllers: [ApplicationController],
    providers: [ApplicationService, MessageRepositoryImpl]
})
export class MessagesModule { }
