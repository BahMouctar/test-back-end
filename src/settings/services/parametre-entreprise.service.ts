// import { Injectable, HttpStatus } from '@nestjs/common';

// import { v4 as uuidv4 } from 'uuid';

// import { isArray, isNull } from 'util';
// import { TYPE_VALUES } from 'src/app.constant';


// const first = (response: any) => {
//     return isArray(response) ? response.length > 0 ? response[0] : null : response;
// }
// const results = (response: any) => {
//     return response;
// }

// @Injectable()
// export class ValeurSettingService {
//     public operation: any = null;

//     constructor(
//         private readonly valeurService: ValeurService,
//         private readonly paramService: ParamService
//     ) { }

//     private saveType = async (type: Type): Promise<Type> => {
//         let response = await this.valeurService.find({ code: type.code });
//         let $type: any = first(response);

//         if (isNull($type)) {
//             response = await this.valeurService.save(type);
//         }
//         else {
//             response = await this.valeurService.update(<Type>{ ...type, ...$type._doc });
//         }
//         $type = results(response);
//         return $type;
//     }
//     //
//     private saveParam = async (type: Param): Promise<Param> => {
//         let response = await this.paramService.find({ code: type.code });
//         let $type: any = first(response);

//         if (isNull($type)) {
//             response = await this.paramService.save(type);
//         }
//         else {
//             response = await this.paramService.update(<Param>{ ...type, ...$type._doc });
//         }

//         $type = results(response);
//         return $type;
//     }

//     public initialize = async () => {

//         // Indicateurs
//         let nSuccess: number = 0;
//         let nError: number = 0;
//         let nTotal: number = TYPE_VALUES.length;
//         let fatalError: boolean = false;
   
//         for (var i = 0; i <= nTotal - 1; i++) {
//             console.log(TYPE_VALUES[i])
//             try {
//                 const { code, libelle, valeurs, description } = TYPE_VALUES[i];
//                 const type: Type = await this.saveType(<Type>{ code, libelle, description, valeurs });

//                 nSuccess++;
//             }
//             catch (e) {
//                 //console.log(e)
//                 nError++;
//             }
//         }
//         return { nTotal, nSuccess, nError, fatalError };
//     }
//     public paramInitialize = async () => {

//         // Indicateurs
//         let nSuccess: number = 0;
//         let nError: number = 0;
//         let nTotal: number = DEFAULT_PARAMS_VALUES.length;
//         let fatalError: boolean = false;

//         for (var i = 0; i <= nTotal - 1; i++) {

//             try {
//                 const { montantInstallation, montantRedevance, description, cc, regimeImposition, centreImposition, persReleveCompte,
//                     contactReleveCompte, contactFixeSC, contactTelSC, code } = DEFAULT_PARAMS_VALUES[i];
//                 const type: Param = await this.saveParam(<Param>{
//                     montantInstallation, montantRedevance, description, cc, regimeImposition, centreImposition, persReleveCompte,
//                     contactReleveCompte, contactFixeSC, contactTelSC, code
//                 });

//                 nSuccess++;
//             }
//             catch (e) {
//                 //console.log(e)
//                 nError++;
//             }
//         }
//         return { nTotal, nSuccess, nError, fatalError };
//     }
// }
