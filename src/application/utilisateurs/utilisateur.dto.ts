import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Role } from 'src/core/shared/constant/role.enum';


export class UtilisateurDto {
    @IsOptional()
    _id: any;

    @ApiProperty()
    @IsNotEmpty()
    civilite: string;

    @ApiProperty()
    @IsNotEmpty()
    nom: string;

    @ApiProperty()
    @IsNotEmpty()
    prenoms: string;

    @ApiProperty()
    @IsOptional()
    phone: string;

    @ApiProperty()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsOptional()
    code: string;

    @IsBoolean()
    @IsOptional()
    verification: boolean;

    @IsBoolean()
    @IsOptional()
    reinitialisation: boolean;

    @IsString()
    @IsOptional()
    expiration: string;

    @ApiProperty()
    @IsOptional()
    role: Role;
}