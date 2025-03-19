import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { MessagesModule } from './modules/messages/messages.module';
import { CustomersModule } from './modules/customers/customers.module';
import { CampaignsModule } from './modules/campaigns/campaigns.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'database-1.car22e4gqefr.us-east-1.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: 'admin123',
    database: 'marketing',
    autoLoadEntities: true,
    synchronize: true,
  }), MessagesModule, CustomersModule, CampaignsModule, UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }