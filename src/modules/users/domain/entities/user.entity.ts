import { Campaign } from "src/modules/campaigns/domain/entities/campaign.entity";
import { Customer } from "src/modules/customers/domain/entities/customer.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity("users")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_id: number;

    
    @ManyToOne(() => Customer, customer => customer.users)
    @JoinColumn({ name: "customer_id" }) 
    customer: Customer;

    @OneToMany(() => Campaign, campaign => campaign.user)
    campaigns: Campaign[];


    @Column({ type: 'varchar', length: 255 })
    username: string;

    @Column({ type: 'boolean', default: true })
    status: boolean;
}