

import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

export class GlobalValidators {
   constructor(){

   }
    // static emailValidator(control: FormControl): { [error: string]: any } {
    //     if (control.value) {
    //         let validEmail = valid_check.isEmail(control.value);
    //         if (!validEmail) {
    //             return { 'invalidEmail': true };
    //         }
    //         return undefined;
    //     }
    // }

     static multipleEmailValidator(control: FormControl): { [error: string]: any } {
         // let EMAIL_REGEXP = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
         // tslint:disable-next-line:max-line-length
         let EMAIL_REGEXP = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/;
         if (!EMAIL_REGEXP.test(control.value)) {
             return { 'invalidEmail': true };
         }
         return undefined;
     }

    static alphanumericwhitespace(control: FormControl): { [error: string]: any } {
        let ALPHA_NUMERIC_REGEXP = /^[A-Z0-9 _/]*$/i;

        if (!ALPHA_NUMERIC_REGEXP.test(control.value)) {
            return { 'invalidValue': true };
        }
        return undefined;
    }

    static isStringContainSpace(control: FormControl): { [error: string]: any } {
        let ALPHA_NUMERIC_REGEXP = /\s/i;

        if (ALPHA_NUMERIC_REGEXP.test(control.value)) {
            return { 'invalidValue': true };
        }
        return undefined;
    }

    static onlynumber(control: FormControl): { [error: string]: any } {
        let ONLY_NUMBER_REGEXP = /^[0-9]*$/;

        if (!ONLY_NUMBER_REGEXP.test(control.value)) {
            return { 'invalidValue': true };
        }
        return undefined;
    }

    static validateurl(control: FormControl): { [error: string]: any } {
        let VALID_URL_REGEXP = /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{3,6}$/;

        if (!VALID_URL_REGEXP.test(control.value)) {
            return { 'invalidUrl': true };
        }
        return undefined;
    }

    static alphanumeric(control: FormControl): { [error: string]: any } {
        let ALPHA_NUMERIC_REGEXP = /^[a-zA-z\d\+s]+$/i;

        if (!ALPHA_NUMERIC_REGEXP.test(control.value)) {
            return { 'invalidValue': true };
        }
        return undefined;
    }
     static validCounty(control:FormControl):{ [error: string]: boolean }{
        //  let client=new HttpClient();
        // service:CountryService=new CountryService();
        //    this._service.getCountry(`https://restcountries.eu/rest/v2/name/${control.value}`).subscribe(
        //        (data:any)=>{
        //         console.log("data==="+data);
        //         return { 'invalidValue': true };
        //        },
        //        (error:any)=>{
        //         console.log("data==="+error);
        //         return { 'invalidValue': true };
        //        })                                                                                                                                               
       return undefined;
    }
}
