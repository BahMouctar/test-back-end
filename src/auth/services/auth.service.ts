import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AuthToken } from '../interfaces/auth-token.interface';
import { Response } from '../../core/shared/classes/response.class';
import * as Hash from 'password-hash';
import * as md5 from 'md5';
import { v4 as uuidv4 } from 'uuid';
import { randomNumber } from '../../core/shared/systems/math.system';
import { Mail } from '../../core/shared/systems/mail.system';
import * as moment from 'moment';
import { IsBoolean } from 'class-validator';
import { Any } from 'typeorm';
import { ResetPassword, SigninDto, SignupDto, VerificationDto } from '../dto/auth.dto';
import { Utilisateur } from 'src/application/utilisateurs/utilisateur.schema';
import { UtilisateurService } from 'src/application/utilisateurs/utilisateur.service';
import { Message } from 'src/core/shared/constant/message.enum';

export interface ResponseSignIn {
    status: { code: number, message: string },
    data: Utilisateur[];
}

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService,
        private readonly userService: UtilisateurService) { }

    private async generateToken(jwtPayload: JwtPayload): Promise<AuthToken> {
        const generateAt = new Date();
        const expiresIn = +new Date(+new Date() + 86400);
        const token = this.jwtService.sign(jwtPayload);
        const authToken: AuthToken = { generateAt, expiresIn, token };
        return authToken;
    }

    public async register(authRegister: SignupDto) {
        // On établit toute la logique pour enregistrer l'utilisateur
        //On verifie si le mail exist deja
        let utilisateur = await this.userService.findOne({ email: authRegister.email });
        if (utilisateur) {
            throw (new HttpException({ status: { code: HttpStatus.CONFLICT, error: Message.ERROR_MESSAGE_DUPLICATE_USER_EMAIL } }, HttpStatus.CONFLICT));
        }
        const password = authRegister.password ? Hash.generate(authRegister.password) : null;
        const newUtilisateur: Utilisateur = <Utilisateur><unknown>authRegister;
        newUtilisateur.password = password;
        // Envoi de mail de confirmation
        utilisateur = await this.userService.save(newUtilisateur);
        utilisateur = await this.sendActivationCode(utilisateur?._id);
        return utilisateur;
    }

    public async verifyAccount(verificationDTO: VerificationDto) {
        const utilisateur: any = await this.userService.findOne({ _id: verificationDTO._id });
        if (utilisateur) {
            const code = utilisateur.code;
            if (code == verificationDTO.code) {
                utilisateur.verification = true;
                const response: any = await this.userService.save(utilisateur);
                return response;
            }
            else {
                throw (new HttpException({ status: { code: HttpStatus.BAD_REQUEST, error: Message.ERROR_MESSAGE_USER_VERIFICATION } }, HttpStatus.NOT_FOUND));
            }
        }
        else {
            throw (new HttpException({ status: { code: HttpStatus.BAD_REQUEST, error: Message.ERROR_MESSAGE_USER_NOT_FOUND } }, HttpStatus.NOT_FOUND));
        }
    }

    public async getUserByUUID(_id: string) {
        const utilisateur: any = await this.userService.findOne({ _id: _id });
        if (utilisateur) {
            return utilisateur;
        }
        else {
            throw (new HttpException({ status: { code: HttpStatus.BAD_REQUEST, error: Message.ERROR_MESSAGE_USER_NOT_FOUND } }, HttpStatus.NOT_FOUND));
        }
    }

    public async sendActivationCode(_id: string) {
        const utilisateur: any = await this.userService.findOne({ _id: _id });
        if (utilisateur) {
            if (!utilisateur.verification) {
                //Mail d'activation
                utilisateur.code = randomNumber(6);
                utilisateur.expiration = moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]');
                const content = `
                Bonjour chère client,
                Validez votre inscription avec le code suivant : ${utilisateur.code}
                Ce code est valable pendant 24H.

                Cordialement,
                LIKE.ANTS`;
                Mail.send(utilisateur.email, "LIKE.ANT: Confirmation", content);

                //utilisateur.verification = { code: randomNumber(6), expiration:  moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]') };
                return this.userService.save(utilisateur);
            }
            else {
                throw (new HttpException({ status: { code: HttpStatus.CONTINUE, error: Message.ERROR_MESSAGE_USER_ACTIVATED} }, HttpStatus.NOT_FOUND));
            }
        }
        else {
            throw (new HttpException({ status: { code: HttpStatus.BAD_REQUEST, error: Message.ERROR_MESSAGE_USER_NOT_FOUND } }, HttpStatus.NOT_FOUND));
        }
    }

    public async signIn(authSignIn: SigninDto) {
        // On établit toute la logique pour faire l'authentification ici
        const utilisateur: any = await this.userService.findOne({ email: authSignIn.email });
        if (utilisateur) {
            if (Hash.verify(authSignIn.password, utilisateur.password)) {
                //
                const token = await this.generateToken({ email: authSignIn.email });
                return new Response(
                    {
                        status: { code: HttpStatus.OK, message: Message.SUCCESS_USER_CONNECTED },
                        data: [ token, utilisateur]
                    }
                );
            }
            else {

                throw (new HttpException({ status: { code: HttpStatus.BAD_REQUEST, error: Message.ERROR_MESSAGE_USER_CONNECTED} }, HttpStatus.NOT_FOUND));
            }
        }
        else {
            throw (new HttpException({ status: { code: HttpStatus.BAD_REQUEST, error: Message.ERROR_MESSAGE_USER_NOT_FOUND } }, HttpStatus.NOT_FOUND));
        }
    }

    public async validateUser(email: string): Promise<any> {
        const user = await this.userService.findOne({ mail: email });
        if (user) {
            return user;
        }
        return null;
    }

    async resetPassword(resetPassword: ResetPassword) {
        const utilisateur: any = await this.userService.findOne({ email: resetPassword.email });
        if (utilisateur) {
            const email = utilisateur.email;
            if (email == resetPassword.email) {
                utilisateur.pass = 'FERO' + randomNumber(8) + 'FR';
                utilisateur.reinitialisation = true;
                const content = `
                Bonjour chère client,

                Votre nouveau mot de passe est : ${utilisateur.password}.

                Cordialement,
                LIKE.ANTS`;
                Mail.send(utilisateur.email, "LIKE.ANT: Confirmation", content);

                Hash.generate(utilisateur.password)

                return await this.userService.save(utilisateur);
            }
            else {
                throw new Error(Message.ERROR_MESSAGE_FETCH_ONE_USER_EMAIL);
            }
        }
    }

    async validateUserPassword(authCredentialsDto: any): Promise<string> {
        const { email, password } = authCredentialsDto;
        const user: any = await this.userService.findOne({ email });
        return user;
    }
}
