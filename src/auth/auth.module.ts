import { Module, HttpModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ApplicationModule } from 'src/application/application.module';

@Module({
    imports: [
        ApplicationModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: 'toSecret001',
            signOptions: {
                expiresIn: 86400,
            },
        }),
        HttpModule.register({ timeout: 12000000, maxRedirects: 5 })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService, JwtStrategy, PassportModule]
})
export class AuthModule { }
