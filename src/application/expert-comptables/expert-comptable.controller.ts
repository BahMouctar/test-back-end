import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, Catch, UseGuards, HttpStatus, HttpException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiAcceptedResponse, ApiBearerAuth, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { isDefined } from 'class-validator';
import { Message } from 'src/core/shared/constant/message.enum';
import { LoggingInterceptor } from 'src/core/shared/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/core/shared/interceptors/transform.interceptor';
import { ObjectIdPipe } from 'src/core/shared/pipes/object-id.pipe';
import { ValidationPipe } from 'src/core/shared/pipes/validation.pipe';
import { ExpertComptableDto } from './expert-comptable.dto';
import { ExpertComptableService } from './expert-comptable.service';


@Catch()
@UseInterceptors( LoggingInterceptor, TransformInterceptor)
@Controller('expert-comptable')
@UseGuards(AuthGuard('jwt')) //Concerne l'autorisation d'accéder à toute les ressources
@ApiBearerAuth('jwt')
@ApiTags('Expert Comptable')

export class ExpertComptableController {
    constructor(private readonly expertComptableService: ExpertComptableService) {}

    @Post()
    @ApiCreatedResponse({description:"Création d'un expert comptable"})
  
    async create(@Body(new ValidationPipe()) expertComptableDto: ExpertComptableDto): Promise<any> {
        const expertComptable = await this.expertComptableService.save( expertComptableDto as any);
        if (expertComptable) {
            return { status: { code: HttpStatus.CREATED, message: Message.SUCCESS_MESSAGE_SAVE }, data: expertComptable };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_MESSAGE_SAVE}, data: null };
    }

    @Put(':primaryKey')
    @ApiAcceptedResponse({description:"Modification d'un expert comptable"})
  
    async update(@Param('primaryKey', new ObjectIdPipe()) primaryKey: string, @Body(new ValidationPipe()) expertComptableDto: ExpertComptableDto): Promise<any> {
       const expertComptable = await this.expertComptableService.update( expertComptableDto as any, primaryKey);
       if (expertComptable) {
            return { status: { code: HttpStatus.ACCEPTED, message: Message.SUCCESS_UPDATE_MESSAGE }, data: expertComptable };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_UPDATE_MESSAGE }, data: null };
    }

    @Delete(':primaryKey')
    @ApiOkResponse({description:"Suppression d'un expert comptable"})
    async delete(@Param('primaryKey', new ObjectIdPipe()) primaryKey: string): Promise<any> {
        const expertComptable = await this.expertComptableService.delete(primaryKey);
        if (expertComptable.deletedCount!= 0) {
            return { status: { code: HttpStatus.OK, message: Message.SUCCESS_DELETE_MESSAGE } };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_DELETE_MESSAGE } };
    }

    @Get()
    @ApiOkResponse({description:"Liste de tous les expert comptables"})
    async findAll(): Promise<any> {
        const expertComptables = await this.expertComptableService.findAll();
        return { status: { code: HttpStatus.OK, message: expertComptables.length + " " + Message.SUCCESS_FETCH_ALL_MESSAGE }, data: expertComptables}
    }

    @Get(':primaryKey')
    @ApiOkResponse({description:"Liste d'un expert comptable"})
    async findOne(@Param('primaryKey', new ObjectIdPipe()) primaryKey: string): Promise<any> {
        const expertComptable = await  this.expertComptableService.findOne(primaryKey);
        if (!isDefined(expertComptable)) {
            throw (new HttpException({ status: { code: HttpStatus.NOT_FOUND, error: Message.ERROR_FETCH_ONE_MESSAGE } }, HttpStatus.NOT_FOUND));
        }
        return { status: { code: HttpStatus.OK, message: Message.SUCCESS_FETCH_ONE_MESSAGE }, data: expertComptable };
    }

    @Get('query/:query')
    async find(@Param('query',new ObjectIdPipe()) query: Object): Promise<any> {
        const expertComptables = await  this.expertComptableService.find(query);
        if (!isDefined(expertComptables)) {
            throw (new HttpException({ status: { code: HttpStatus.NOT_FOUND, error: Message.ERROR_FETCH_ONE_MESSAGE } }, HttpStatus.NOT_FOUND));
        }
        return { status: { code: HttpStatus.OK, message: expertComptables.length + " " + Message.SUCCESS_FETCH_ALL_MESSAGE }, data: expertComptables};
    }
}