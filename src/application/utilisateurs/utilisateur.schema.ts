import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Role } from 'src/core/shared/constant/role.enum';


@Schema()
export class Utilisateur extends Document {

    @Prop({default:null})
    civilite: string;

    @Prop()
    nom: string;

    @Prop()
    prenoms: string;

    @Prop()
    phone: number;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({nullable:true})
    fcmToken: string;

    @Prop({nullable:true})
    code: string;

    @Prop({nullable:true})
    verification: boolean;
  
    @Prop({nullable:true})
    reinitialisation: boolean;
  
    @Prop({nullable:true})
    expiration: string;

    @Prop()
    role: Role;
}

export const UtilisateurSchema = SchemaFactory.createForClass(Utilisateur);