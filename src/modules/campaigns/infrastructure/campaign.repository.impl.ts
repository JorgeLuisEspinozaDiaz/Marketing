import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CampaignRepository } from '../domain/entities/campaign.repository';
import { Campaign } from '../domain/entities/campaign.entity';


@Injectable()
export class  CampaignRepositoryImpl implements CampaignRepository {
    constructor(
        @InjectRepository(Campaign)
        private readonly  campaignRepository: Repository<Campaign>,
    ) { }

    async findById(id: string): Promise<Campaign | null> {
        return this.campaignRepository.findOne({ where: { id: Number(id) } });
    }

    async save(user: Campaign): Promise<Campaign> {
        return this.campaignRepository.save(user);
    }
}
