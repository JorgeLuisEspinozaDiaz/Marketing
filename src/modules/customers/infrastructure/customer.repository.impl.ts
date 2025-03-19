import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
 
import { CustomerRepository } from '../domain/entities/customer.repository';
import { Customer } from '../domain/entities/customer.entity';


@Injectable()
export class  CustomerRepositoryImpl implements CustomerRepository {
    constructor(
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) { }

    async findById(id: string): Promise<Customer | null> {
        return this.customerRepository.findOne({ where: { id: Number(id) } });
    }

    async save(user: Customer): Promise<Customer> {
        return this.customerRepository.save(user);
    }
}
