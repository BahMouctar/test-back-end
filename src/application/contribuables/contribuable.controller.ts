import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, Catch, UseGuards, HttpStatus, HttpException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiAcceptedResponse, ApiBearerAuth, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { isDefined } from 'class-validator';
import { Message } from 'src/core/shared/constant/message.enum';
import { LoggingInterceptor } from 'src/core/shared/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/core/shared/interceptors/transform.interceptor';
import { ObjectIdPipe } from 'src/core/shared/pipes/object-id.pipe';
import { ValidationPipe } from 'src/core/shared/pipes/validation.pipe';
import { ContribuableDto } from './contribuable.dto';
import { ContribuableService } from './contribuable.service';


@Catch()
@UseInterceptors( LoggingInterceptor, TransformInterceptor)
@Controller('contribuable')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('jwt')
@ApiTags('Contribuable')

export class ContribuableController {
    constructor(private readonly contribuableService: ContribuableService) {}

    @Post()
    @ApiCreatedResponse({description:"Création d'un contibuable"})
  
    async create(@Body(new ValidationPipe()) contribuableDto: ContribuableDto): Promise<any> {
        const contribuable = await this.contribuableService.save( contribuableDto as any);
        if (contribuable) {
            return { status: { code: HttpStatus.CREATED, message: Message.SUCCESS_MESSAGE_SAVE }, data: contribuable };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_MESSAGE_SAVE}, data: null };
    }

    @Put(':primaryKey')
    @ApiAcceptedResponse({description:"Modification d'une contibuable"})
  
    async update(@Param('primaryKey', new ObjectIdPipe()) primaryKey: string, @Body(new ValidationPipe()) contribuableDto: ContribuableDto): Promise<any> {
       const contribuable = await this.contribuableService.update( contribuableDto as any, primaryKey);
       if (contribuable) {
            return { status: { code: HttpStatus.ACCEPTED, message: Message.SUCCESS_UPDATE_MESSAGE }, data: contribuable };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_UPDATE_MESSAGE }, data: null };
    }

    @Delete(':primaryKey')
    @ApiOkResponse({description:"Suppression d'une contibuable"})
    async delete(@Param('primaryKey', new ObjectIdPipe()) primaryKey: string): Promise<any> {
        const contribuable = await this.contribuableService.delete(primaryKey);
        if (contribuable.deletedCount!= 0) {
            return { status: { code: HttpStatus.OK, message: Message.SUCCESS_DELETE_MESSAGE } };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_DELETE_MESSAGE } };
    }

    @Get()
    @ApiOkResponse({description:"Liste de toutes les contibuables"})
    async findAll(): Promise<any> {
        const contribuables = await this.contribuableService.findAll();
        return { status: { code: HttpStatus.OK, message: contribuables.length + " " + Message.SUCCESS_FETCH_ALL_MESSAGE }, data: contribuables}
    }

    @Get(':primaryKey')
    @ApiOkResponse({description:"Liste d'une contibuable"})
    async findOne(@Param('primaryKey', new ObjectIdPipe()) primaryKey: string): Promise<any> {
        const contribuable = await  this.contribuableService.findOne(primaryKey);
        if (!isDefined(contribuable)) {
            throw (new HttpException({ status: { code: HttpStatus.NOT_FOUND, error: Message.ERROR_FETCH_ONE_MESSAGE } }, HttpStatus.NOT_FOUND));
        }
        return { status: { code: HttpStatus.OK, message: Message.SUCCESS_FETCH_ONE_MESSAGE }, data: contribuable };
    }

    @Get('query/:query')
    async find(@Param('query',new ObjectIdPipe()) query: Object): Promise<any> {
        const contribuables = await  this.contribuableService.find(query);
        if (!isDefined(contribuables)) {
            throw (new HttpException({ status: { code: HttpStatus.NOT_FOUND, error: Message.ERROR_FETCH_ONE_MESSAGE } }, HttpStatus.NOT_FOUND));
        }
        return { status: { code: HttpStatus.OK, message: contribuables.length + " " + Message.SUCCESS_FETCH_ALL_MESSAGE }, data: contribuables};
    }
}