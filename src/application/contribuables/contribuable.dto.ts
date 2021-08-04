import { ApiProperty } from '@nestjs/swagger';
import {IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class ContribuableDto {
    
    @IsOptional()
    _id: any;

    @ApiProperty()
    @IsOptional()
    numero: string;

    @ApiProperty()
    @IsString()
    raisonSociale: string;

    @ApiProperty()
    @IsString()
    rccm: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    contact: string;

    @ApiProperty()
    @IsBoolean()
    statut: boolean;
}