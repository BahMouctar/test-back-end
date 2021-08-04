import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isDefined } from 'class-validator';
import { ExpertComptable } from './expert-comptable.schema';
import { getCode } from 'src/core/shared/functions/function';

@Injectable()
export class ExpertComptableService {
    constructor(@InjectModel('ExpertComptable') private readonly expertComptableModel: Model<ExpertComptable>) {}

    async save(expertComptable: ExpertComptable): Promise<any> {
        try{
            expertComptable.matricule = getCode();
            const document = new this.expertComptableModel(expertComptable);
            return await document.save(); 
        }catch(err){
            return Promise.resolve(null);
        }
    }

    async update(expertComptable: ExpertComptable, id:string): Promise<any> {

        try{
            const document = await this.expertComptableModel.findOne({_id:id});
            expertComptable.matricule = document.matricule;
            document.overwrite(expertComptable);
            return  await document.save();
        }catch(err){
            return Promise.resolve(null);

        }
    }

    async delete(primaryKey: string): Promise<any> {
       try{
        return  await this.expertComptableModel.deleteOne({ _id: primaryKey});
       }catch(err){
        return Promise.resolve(null);
       }
    }

    async findAll(): Promise<any> {
        return await this.expertComptableModel.find().exec();
    }

    async findOne(primaryKey: string): Promise<any> {
       return await this.expertComptableModel.findById(primaryKey).exec();
    }

    async find(query: Object): Promise<any> {
        return await this.expertComptableModel.find(query).exec();
    }
}