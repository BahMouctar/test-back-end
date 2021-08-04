import { Controller, Get, HttpException, HttpStatus, Param, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { existsSync } from 'fs';
import { dirname, join } from 'path';

@Controller()
@ApiTags('Application')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); 
  }

}
