/* eslint-disable */
import { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');
export const setupApp = (app : INestApplication) => {
    app.use(cookieSession({
        keys: ['abcdef'],
      }));
      app.useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
        }),
      );
};