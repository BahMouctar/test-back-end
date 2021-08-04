import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString } from "class-validator";
import { Role } from "src/core/shared/constant/role.enum";

export class SignupDto {

      @ApiProperty()
      @IsString()
      civilite:string;

      @ApiProperty()
      @IsString()
      nom:string;

      @ApiProperty()
      @IsString()
      prenoms:string;

      @ApiProperty()
      @IsString()
      phone:number;

      @ApiProperty()
      @IsEmail()
      email: string;

      @ApiProperty()
      @IsString()
      password: string;

      @ApiProperty()
      role: Role;
}

export class VerificationDto {
      
      @ApiProperty()
      @IsString()
      code: string;

      @ApiProperty()
      @IsOptional()
      _id:  string;
}

export class SigninDto {
      @ApiProperty()
      @IsEmail() 
      email: string;

      @ApiProperty()
      @IsString()
      password: string;
}

export class SigninTokenDto {
      @ApiProperty()
      @IsString()
      token: string;
}

export class ResetPassword {
      @ApiProperty()
      @IsEmail()
      email : string;
}