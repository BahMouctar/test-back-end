import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { expertComptableController, expertComptableSchema, expertComptableService } from '.';

@Module({
    imports: [
      MongooseModule.forFeature(expertComptableSchema),
  ],
  providers : expertComptableService,
  controllers : expertComptableController,
  exports: expertComptableService
})
export class ExpertComptableModule {}
