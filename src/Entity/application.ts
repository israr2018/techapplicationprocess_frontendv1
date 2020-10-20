 export  class application {
    id: number;
    name: string;
    familyName: string;
    address: string;
    countryOfOrigin: string;
    emailAddress: string;
    age: number;
    hired: boolean;
    constructor(values:object=[]){
      Object.assign(this,values);
    }
 }