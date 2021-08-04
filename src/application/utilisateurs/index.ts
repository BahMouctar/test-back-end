import { UtilisateurController } from './utilisateur.controller';
import { Utilisateur, UtilisateurSchema } from './utilisateur.schema';
import { UtilisateurService } from './utilisateur.service';


export const utilisateurSchema = [
    { name: Utilisateur.name, schema: UtilisateurSchema },
];

export const utilisateurService = [
    UtilisateurService,
];

export const utilisateurController = [
    UtilisateurController,
];