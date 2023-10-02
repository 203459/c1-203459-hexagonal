export class User {
    constructor(
       public uuid: string,
       public name: string,
       public lastName: string,
       public email: string,
       public tel:string,
       public status: boolean,
       public password: string,
    ){}
    
}