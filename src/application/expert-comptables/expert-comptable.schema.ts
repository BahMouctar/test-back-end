import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ExpertComptable extends Document {
    
    @Prop()
    matricule: string;

    @Prop()
    noms: string;

    @Prop()
    prenoms: string;

    @Prop()
    email: string;

    @Prop()
    contact: string;

    @Prop({default: true})
    statut: boolean;
}

export const ExpertComptableSchema = SchemaFactory.createForClass(ExpertComptable);