import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, Catch, UseGuards, HttpStatus, HttpException, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiAcceptedResponse, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { isDefined } from 'class-validator';
import { Message } from 'src/core/shared/constant/message.enum';
import { LoggingInterceptor } from 'src/core/shared/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/core/shared/interceptors/transform.interceptor';
import { ObjectIdPipe } from 'src/core/shared/pipes/object-id.pipe';
import { UtilisateurDto } from './utilisateur.dto';
import { UtilisateurService } from './utilisateur.service';

@Catch()
@UseInterceptors(LoggingInterceptor, TransformInterceptor)
@Controller('utilisateur')
@ApiTags('Utilisateur')
export class UtilisateurController {
    constructor(private readonly userService: UtilisateurService) { }

    @Post()
    @ApiCreatedResponse({description:"Création d'un utilisateur"})
  
    async create(@Body(new ValidationPipe()) userDto: UtilisateurDto): Promise<any> {
        const user = await this.userService.save(userDto as any);
        if (user) {
            return { status: { code: HttpStatus.CREATED, message: Message.SUCCESS_MESSAGE_SAVE }, data: user };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_MESSAGE_SAVE}, data: null };
    }

    @Put(':primaryKey')
    @ApiAcceptedResponse({description:"Modification d'un user"})
  
    async update(@Param('primaryKey', new ObjectIdPipe()) primaryKey: string, @Body(new ValidationPipe()) userDto: UtilisateurDto): Promise<any> {
       const user = await this.userService.update( userDto as any, primaryKey);
       if (user) {
            return { status: { code: HttpStatus.ACCEPTED, message: Message.SUCCESS_UPDATE_MESSAGE }, data: user };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_UPDATE_MESSAGE }, data: null };
    }

    @Delete(':primaryKey')
    @ApiOkResponse({description:"Suppression d'un utilisateur"})
    async delete(@Param('primaryKey', new ObjectIdPipe()) primaryKey: string): Promise<any> {
        const user = await this.userService.delete(primaryKey);
        if (user.deletedCount!= 0) {
            return { status: { code: HttpStatus.OK, message: Message.SUCCESS_DELETE_MESSAGE } };
        }
        return { status: { code: HttpStatus.BAD_REQUEST, message: Message.ERROR_DELETE_MESSAGE } };
    }


    @Get()
    @ApiOkResponse({description:"Liste de tous les utilisateurs"})
    async findAll(): Promise<any> {
        const users = await this.userService.findAll();
        return { status: { code: HttpStatus.OK, message: users.length + Message.SUCCESS_FETCH_ALL_MESSAGE }, data: users}
    }

    @Get(':primaryKey')
    @ApiOkResponse({description:"Liste d'un utilisateur"})
    async findById(@Param('primaryKey', new ObjectIdPipe()) primaryKey): Promise<any> {
        const user = this.userService.findById(primaryKey)
        if (!isDefined(user)) {
            throw (new HttpException({ status: { code: HttpStatus.NOT_FOUND, error: Message.ERROR_FETCH_ONE_MESSAGE } }, HttpStatus.NOT_FOUND));
        }
        return { status: { code: HttpStatus.OK, message: Message.SUCCESS_FETCH_ONE_MESSAGE }, data: user };
    }

    @Get('query/:query')
    async find(@Param('query', new ObjectIdPipe()) query): Promise<any> {
        const users = await this.userService.find(query);
        if (!isDefined(users)) {
            throw (new HttpException({ status: { code: HttpStatus.NOT_FOUND, error: Message.ERROR_FETCH_ONE_MESSAGE } }, HttpStatus.NOT_FOUND));
        }
        return { status: { code: HttpStatus.OK, message: users.length + Message.SUCCESS_FETCH_ALL_MESSAGE }, data: users};
    }
}