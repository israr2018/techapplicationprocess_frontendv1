import { application } from 'src/Entity/application';
import { catchError, retry, map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http'
import { HttpErrorHandler, HandleError } from './http-error-handler.servics';
import { Injectable } from '@angular/core';
import { FormControl, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer, throwError } from 'rxjs';
// import 'rxjs/add/operator/catch';

type ValidationErrors = {
  [key: string]: any;
}; 
@Injectable()
export class ApplicationService {
  debouncer: any;
  baseUrl:string="http://localhost:51690/api/application";
   // baseUrl:string="http://localhost:44325/api/application";
    private handleError: HandleError;
    constructor(private _http: HttpClient) {
    
    }   
    addApplication2(model:application):Observable<any>{
      console.log("baseUrl==="+this.baseUrl);
     return  this._http.post<any>(this.baseUrl,model);

    }
    addApplication3(model:application):Observable<any>{
     console.log("model==="+JSON.stringify(model));
    return this._http.post(this.baseUrl, model)
    .pipe(map((response: Response) => response.json()));
    }
    getCountry(name:any):Observable<any>{
      console.log("getCountry name :"+name)
      return this._http.get<any>(`https://restcountries.eu/rest/v2/name/${name}`).pipe(catchError(this.errorHandler))
    }
    errorHandler(err:HttpErrorResponse){
      console.log("err=>",err);
      return throwError(err.message);
    }
  
}