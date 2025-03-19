import { Module } from '@nestjs/common';
import { ApplicationService } from './application/application.service';
import { ApplicationController } from './application/application.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user.entity';
import { UserRepositoryImpl } from './infrastructure/user.repository.impl';

@Module({
  imports: [CqrsModule,TypeOrmModule.forFeature([User])], 
  providers: [ApplicationService,UserRepositoryImpl],
  controllers: [ApplicationController,]
})
export class UsersModule {}
