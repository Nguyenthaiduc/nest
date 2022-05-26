import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Report } from './reports/reports.entity';

export const AppDataSource = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [User, Report],
  synchronize: true,
});

@Module({
  imports: [AppDataSource, ReportsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
