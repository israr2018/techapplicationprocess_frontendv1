import { DataStorage } from './../../common/services/data.storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { application } from 'src/Entity/application';
import {
  FormGroup,
  
  FormControl,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidationErrors
  
} from "@angular/forms";
import { ApplicationService } from 'src/Service/application.service';

import { OnInit, Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GlobalValidators } from 'src/common/validators/global.validators';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {

  title = 'TechApplicationProcess-FrontEnd';
  btnTitle:string="Submit";
  isSubmitting:boolean=false;
  applicationForm:FormGroup;
  Hired:boolean=false;
  closeResult: string;
constructor(private _fb:FormBuilder,
  private _service:ApplicationService,
  private modalService: NgbModal,
  private _http:HttpClient,
  private _router:Router,
  private _dataStorage:DataStorage
  ) {
  
}
  ngOnInit(): void {
   
    this.applicationForm = this._fb.group({
      
      'Name': [undefined, [Validators.required,Validators.minLength(5)]],
      'FamilyName': [undefined, [Validators.required,Validators.minLength(5)]],
      'Address': [undefined, [Validators.required,Validators.minLength(10)]],

      'CountryOfOrigin': [undefined, [Validators.required],this.countryValidator2.bind(this)],
     
      'EmailAddress': [undefined, [Validators.required,Validators.email]],
      'Age': [undefined,[Validators.required,Validators.pattern("^[0-9]*$"),Validators.min(20),Validators.max(60)]]
      
    });

  }
  
  get Name(){return this.applicationForm.get("Name");}
  get FamilyName(){return this.applicationForm.get("FamilyName");}
  get Address(){return this.applicationForm.get("Address");}
  get CountryOfOrigin(){return this.applicationForm.get("CountryOfOrigin");}
  get EmailAddress(){return this.applicationForm.get("EmailAddress");}
  get Age(){return this.applicationForm.get("Age");}
 
  toggleHired(e):void{
    this.Hired=!this.Hired;
    console.log("toogled");
  }

  addApplication(values:any):void{
   let model:application =new application(values);
   model.hired=this.Hired;
   
   //this._service.addApplication2(model).(x=>{console.log("id :${x.id}")});
   console.log("addApplication is get Called");
   this.btnTitle="submitting...";
   this.isSubmitting=true;
  //  this._router.navigate(['/confirmation'],{});
   this._service.addApplication2(model).subscribe(
     (data:any)=>{
       console.log("status:"+data);
       this.btnTitle="Submit";
       this.isSubmitting=false;
      this._dataStorage.data="Application Saved Succesfully";
       this._router.navigate(['/confirmation',{}]);
      },
     (error:any)=>{
       this.btnTitle="Submit";
       this.isSubmitting=false;
       this._dataStorage.data="Error: Something goes wrong."
       console.log("error:"+JSON.stringify(error));
       this._router.navigate(['/confirmation',{message:error}]);
     }
     );
     
  }
  resetForm():void{
    console.log("reset form is called");
    this.applicationForm.controls["Name"].setValue("");
    this.applicationForm.controls["FamilyName"].setValue("");
    this.applicationForm.controls["Address"].setValue("");
    this.applicationForm.controls["EmailAddress"].setValue("");
    this.applicationForm.controls["CountryOfOrigin"].setValue("");
    this.applicationForm.controls["Age"].setValue("");
    this.modalService.dismissAll();

  }
  open(content) {
    console.log("open is called");
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed`;
    // });
  }
  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._service.getCountry(ctrl.value).pipe(
      map(isTaken => (isTaken ? { invalidCountryName: true } : null)),
      catchError(() => of(null))
    );
  }

  countryValidator2(control:FormControl):Promise<any>|Observable<any>{
    return new Promise((resolve,reject)=>{
      this._http.get(`https://restcountries.eu/rest/v2/name/${control.value}`).subscribe(x=>{ resolve(null);},
      error=>{resolve({"invalidCountryName":true})}
      
      )
    });
  }

}
