import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import configuration from '../../config/configuration';
import { ContribuableModule } from './contribuables/contribuable.module';
import { ExpertComptableModule } from './expert-comptables/expert-comptable.module';
import { UtilisateurModule } from './utilisateurs/utilisateur.module';

const DBCONFIG = configuration().db;

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/testapicfdb'),
    ContribuableModule,
    ExpertComptableModule,
    UtilisateurModule,
  ],
  exports: [
    MongooseModule,
    ContribuableModule,
    ExpertComptableModule,
    UtilisateurModule,
  ]
})
export class ApplicationModule {}
