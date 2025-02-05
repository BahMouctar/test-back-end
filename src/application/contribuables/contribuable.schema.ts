import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Contribuable extends Document {
    
    @Prop()
    numero: string;

    @Prop()
    raisonSociale: string;

    @Prop()
    rccm: string;

    @Prop()
    email: string;

    
    @Prop()
    contact: string;
  
    @Prop({default:null})
    statut: string;

}

export const ContribuableSchema = SchemaFactory.createForClass(Contribuable);