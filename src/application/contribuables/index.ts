import { ContribuableController } from './contribuable.controller';
import { Contribuable, ContribuableSchema } from './contribuable.schema';
import { ContribuableService } from './contribuable.service';


export const contribuableSchema = [
    { name: Contribuable.name, schema: ContribuableSchema },
];

export const contribuableService = [
    ContribuableService,
];

export const contribuableController = [
    ContribuableController,
];