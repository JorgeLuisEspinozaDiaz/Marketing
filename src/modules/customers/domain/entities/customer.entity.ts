import { User } from "src/modules/users/domain/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('customers')
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: 'varchar',length: 255  })
     name: string;

     @Column({ type: 'boolean', default: true })
     status: boolean;

     @OneToMany(() => User, user => user.customer) 
    users: User[];
}