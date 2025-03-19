import { Module } from '@nestjs/common';
import { ApplicationController } from './application/application.controller';
import { ApplicationService } from './application/application.service';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './domain/entities/customer.entity';
import { CustomerRepositoryImpl } from './infrastructure/customer.repository.impl';

@Module({
    imports: [CqrsModule, TypeOrmModule.forFeature([Customer])],
    controllers: [ApplicationController],
    providers: [ApplicationService, CustomerRepositoryImpl]
})
export class CustomersModule { }
