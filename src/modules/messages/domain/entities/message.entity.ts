import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MessageStatus } from "./message-status.enun";
import { Campaign } from "src/modules/campaigns/domain/entities/campaign.entity";
@Entity("messages")
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    campaign_id: number

    @ManyToOne(() => Campaign, campaign => campaign.messages)
    @JoinColumn({ name: "campaign_id" })
    campaign: Campaign;

    @Column()
    phone: string

    @Column({ type: 'varchar', length: 255 })
    text: string

    @Column({
        type: 'int',
        default: MessageStatus.PENDING,
    })
    shipping_status: MessageStatus

    @Column({ type: 'date' })
    process_date: Date


    @Column({ type: 'time' })
    process_hour: string


}