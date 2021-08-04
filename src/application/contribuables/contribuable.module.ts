import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { contribuableController, contribuableSchema, contribuableService } from '.';

@Module({
    imports: [
      MongooseModule.forFeature(contribuableSchema),
  ],
  providers : contribuableService,
  controllers : contribuableController,
  exports: contribuableService
})
export class ContribuableModule {}
