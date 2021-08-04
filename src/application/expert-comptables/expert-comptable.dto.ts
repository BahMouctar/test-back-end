import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class ExpertComptableDto {
    
    @IsOptional()
    _id: any;

    @ApiProperty()
    @IsOptional()
    matricule: string;

    @ApiProperty()
    @IsString()
    noms: string;

    @ApiProperty()
    @IsString()
    prenoms:string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    contact:string;

    @ApiProperty()
    @IsBoolean()
    statut:boolean;

}