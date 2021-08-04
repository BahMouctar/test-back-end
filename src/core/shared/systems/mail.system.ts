import configuration from 'config/configuration';
import * as nodemailer from 'nodemailer';

export class Mail{

    private static async transporter() {
        /**
            { code:"SMTP-HOST", nom:"Serveur", description: "Nom du serveur SMTP (smtp.domaine.ci)", $datatype:"TYPD-STRING" },
            { code:"SMTP-PORT", nom:"Port", description: "Port utilisé par le serveur (587)", $datatype:"TYPD-NUMBER" },
            { code:"SMTP-SECURE", nom:"sécuriser la connexion", description: "Sécuriser la connexion par un certifica SSL ou TLS", $datatype:"TYPD-BOOLEAN" },
            { code:"SMTP-USER", nom:"Utilisateur", description: "Compte utilisateur qui enverra le mail", $datatype:"TYPD-STRING" },
            { code:"SMTP-PASS", nom:"Mot de passe", description: "Mot de passe du compte utilisateur", $datatype:"TYPD-STRING" },

         */
       // const paramRepository = getRepository(parametreEntity); // you can also get it via getConnection().getRepository() or getManager().getRepository()
        const host        =configuration().mail.host;
        const port        =configuration().mail.port;
        const secure      = configuration().mail.secure.non;
        const user        =configuration().mail.auth.user;
        const pass        =configuration().mail.auth.pass;

        return nodemailer.createTransport({
            host: host,
            port: port,
            secure: secure, // true for 465, false for other ports
            auth: {
                user: user, // generated ethereal user
                pass: pass // generated ethereal password 
            }
        });
    }

    public static async send(email: string, subject: string, content:string) {
        const transporter = await this.transporter();
        const  info = await transporter.sendMail({
            from: configuration().mail.from, // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            text: content, // plain text body
            html: content
        });
        return info;
    }
}