export class AccountDto {
    nom: string;
    prenoms: string;
    phone: string;
    mail: string;
    pass: string;
}

export class UpdatePassword {
    mail : string;
    pass:string;
    newpass:string;
    cpass:string;
}