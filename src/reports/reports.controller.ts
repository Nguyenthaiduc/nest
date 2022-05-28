/* eslint-disable */
import { Controller, Post, Body } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
    @Post()
    createRepo(@Body() body: CreateReportDto) {


    }
}
