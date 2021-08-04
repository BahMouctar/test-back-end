import {  Body, Catch,  Controller, Get,    Param,  Post, Put, Delete,   UseGuards,  UseInterceptors, } from '@nestjs/common';
import { LoggingInterceptor } from '../../core/shared/interceptors/logging.interceptor';
import { InitializeSettingService } from '../services/initialize.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Catch()
@UseInterceptors(LoggingInterceptor)
@Controller('setting/initialize')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Parametre Application')

export class InitializeSettingController {
    constructor(
        private readonly initializeSettingService: InitializeSettingService,
    ) {}

    @Get()
    async initialize() {
        const result = await this.initializeSettingService.initialize();
        return result;
    }
}
