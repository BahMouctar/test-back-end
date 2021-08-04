import { readFileSync } from 'fs';

const env = process.env.ENV || "local"
require('dotenv').config({ path: "./.env." + env })

export const CONFIG_FILE = 'config.json';
export const CONFIG = () => JSON.parse(readFileSync(CONFIG_FILE,'utf8'));

export const TYPE_VALUES = [
    {
        code: "TCL", libelle: "Type de client", description: "Gestion des type de client",
        valeurs: [
            { code: "TCL-PERSMRL", libelle: "Personne Morale", description: "Peronne Morale" },
            { code: "TCL-PERSPHY", libelle: "Personne Physique", description: "Personne Physique" }
        ]
    }

]

export const TYPE_CONTRATS = [
    {
        code: "TCT", libelle: "Type de contrat", description: "Gestion des type de contrat",
        valeurs: [
            { code: "TCT-CDI", libelle: "CDI", description: "Contrat à durée indéterminée" },
            { code: "TCT-CDD", libelle: "CDD", description: "Contrat à durée déterminée" },
            { code: "TCT-ITRM", libelle: "Intérim", description: "Intérim" },
            { code: "TCT-PSTR", libelle: "Prestataire", description: "Prestataire" },
            { code: "TCT-CSTN", libelle: "Consultant", description: "Consultant" },
            { code: "TCT-MAD", libelle: "MAD", description: "MAD" }
        ]
    }

]


export const DEPARTMENTS = [
    {
        code: "TCT", libelle: "Type de contrat", description: "Gestion des type de contrat",
        valeurs: [
            { code: "TCT-AIN", libelle: "Ain", description: "Ain" },
            { code: "TCT-ALLIER", libelle: "Allier", description: "Allier" },
            { code: "TCT-ADHPCE", libelle: "Alpes de Haute-Provence", description: "Alpes de Haute-Provence" },
            { code: "TCT-HTALP", libelle: "Hautes-Alpes", description: "Hautes-Alpes" },
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Ardennes", description: "Ardennes" },
            { code: "TCT-ARDCHE", libelle: "Ariège", description: "Ariège" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },

            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },
            
            { code: "TCT-ALPMTM", libelle: "Alpes-Maritimes", description: "Alpes-Maritimes" },
            { code: "TCT-ARDCHE", libelle: "Ardêche", description: "Ardêche" },

        ]
    }

]
