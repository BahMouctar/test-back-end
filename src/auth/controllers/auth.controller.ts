import { Controller, Get, Post, Body, UseGuards, Param } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthPipe } from '../pipes/auth.pipe';
import { SignupDto, VerificationDto, SigninDto, ResetPassword } from '../dto/auth.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';


@Controller('auth')
@ApiTags('Authentification')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async register(@Body(new AuthPipe()) authRegisterDto: SignupDto) {
        return this.authService.register(authRegisterDto);
    }

    @Post('verify')
    async verify(@Body(new AuthPipe()) verificationDTO: VerificationDto) {
        return this.authService.verifyAccount(verificationDTO);
    }

    @Get('uuid/:uuid')
    async getUserByUUID(@Param('uuid') uuid: string): Promise<any> {
        return  this.authService.getUserByUUID(uuid);
    }

    // @Get('activation/:uuid')
    // async sendActivationCode(@Param('uuid') uuid: string): Promise<any> {
    
    //     return  this.authService.sendActivationCode(uuid);
    // }
    
    @Post('signin')
    async signIn(@Body(new AuthPipe()) authSignInDto: SigninDto) {
        return this.authService.signIn(authSignInDto);
    }

    @Post('resetpassword')
    async resetPassword(@Body(new AuthPipe()) resetPasswordDto: ResetPassword) {
        return this.authService.resetPassword(resetPasswordDto);
    }
}
