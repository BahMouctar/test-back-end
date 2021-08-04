import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { utilisateurController, utilisateurSchema, utilisateurService } from '.';

@Module({
  imports: [
    MongooseModule.forFeature(utilisateurSchema)
  ],
  providers : utilisateurService,
  controllers : utilisateurController,
  exports: utilisateurService
})
export class UtilisateurModule {}
