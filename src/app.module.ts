/* eslint-disable */
import { Module, ValidationPipe, MiddlewareConsumer } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Report } from './reports/reports.entity';
const cookieSession = require('cookie-session');

// export const AppDataSource = TypeOrmModule.forRoot({
//   type: 'sqlite',
//   database: process.env.NODE_ENV === 'test' ? 'test.sqlite' : 'db.sqlite',
//   entities: [User, Report],
//   synchronize: true,
// });

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
     TypeOrmModule.forRootAsync({
       inject: [ConfigService],
       useFactory: (config: ConfigService) => {
          return {
            type: 'sqlite',
            database: config.get<string>('DB_NAME'),
            entities: [User, Report],
            synchronize: true,
          }; 
       },
     }),
      ReportsModule,
       UsersModule
      ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  //middleware cookie session move from main.ts to app.module.ts
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: ['abcdef'],
        }),
      )
      .forRoutes('*'); //Global Middleware
  }
}
