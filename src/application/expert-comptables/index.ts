import { ExpertComptableController } from './expert-comptable.controller';
import { ExpertComptable, ExpertComptableSchema } from './expert-comptable.schema';
import { ExpertComptableService } from './expert-comptable.service';


export const expertComptableSchema = [
    { name: ExpertComptable.name, schema: ExpertComptableSchema },
];

export const expertComptableService = [
    ExpertComptableService,
];

export const expertComptableController = [
    ExpertComptableController,
];