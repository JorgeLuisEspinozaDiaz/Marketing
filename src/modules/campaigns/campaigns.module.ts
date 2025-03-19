import { Module } from '@nestjs/common';
import { ApplicationController } from './application/application.controller';
import { ApplicationService } from './application/application.service';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './domain/entities/campaign.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Campaign])],
  controllers: [ApplicationController],
  providers: [ApplicationService, CampaignsModule]
})
export class CampaignsModule { }
