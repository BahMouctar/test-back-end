import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Utilisateur } from './utilisateur.schema';
@Injectable()
export class UtilisateurService {
    constructor(
        @InjectModel('Utilisateur') private readonly userModel: Model<Utilisateur>
    ) { }

    async save(user: Utilisateur): Promise<any> {
        try {
            const documentUser = new this.userModel(user);
            return  await documentUser.save();
        } catch (err) {
            return Promise.resolve(null);
        }
    }

    async update(user: Utilisateur, id:string): Promise<any> {

        try{
            const document = await this.userModel.findOne({_id:id});
            document.overwrite(user);
            return  await document.save();
        }catch(err){
            return Promise.resolve(null);

        }
    }

    async delete(primaryKey: string): Promise<any> {
        try{
         return  await this.userModel.deleteOne({ _id: primaryKey});
        }catch(err){
         return Promise.resolve(null);
        }
     }

    async findAll(): Promise<any[]> {
        return await this.userModel.find().exec();
    }

    async findById(primaryKey: any): Promise<any> {
        return await this.userModel.findById(primaryKey).exec();
    }

    async find(query: any): Promise<any[]> {
        return await this.userModel.find(query).exec();
    }

    async findOne(query: any): Promise<any> {
        return await this.userModel.findOne(query).exec();
    }
}