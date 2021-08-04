import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isDefined } from 'class-validator';
import { Contribuable } from './contribuable.schema';
import { getCode } from 'src/core/shared/functions/function';

@Injectable()
export class ContribuableService {
    constructor(@InjectModel('Contribuable') private readonly contribuableModel: Model<Contribuable>) {}

    async save(contribuable: Contribuable): Promise<any> {
        try{
            contribuable.numero = getCode();
            const document = new this.contribuableModel(contribuable);
            return await document.save(); 
        }catch(err){
            return Promise.resolve(null);
        }
    }

    async update(contribuable: Contribuable, id:string): Promise<any> {

        try{
            const document = await this.contribuableModel.findOne({_id:id});
            contribuable.numero = document.numero;
            document.overwrite(contribuable);
            return  await document.save();
        }catch(err){
            return Promise.resolve(null);

        }
    }

    async delete(primaryKey: string): Promise<any> {
       try{
        return  await this.contribuableModel.deleteOne({ _id: primaryKey});
       }catch(err){
        return Promise.resolve(null);
       }
    }

    async findAll(): Promise<any> {
        return await this.contribuableModel.find().exec();
    }

    async findOne(primaryKey: string): Promise<any> {
       return await this.contribuableModel.findById(primaryKey).exec();
    }

    async find(query: Object): Promise<any> {
        return await this.contribuableModel.find(query).exec();
    }
}