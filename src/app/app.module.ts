import { DataStorage } from './../common/services/data.storage';

import { HttpErrorHandler } from './../Service/http-error-handler.servics';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplicationService } from 'src/Service/application.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { ROUTE } from './app.route';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationComponent,
    NewApplicationComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTE),
    NgbModule,
    AppRoutingModule
  ],
  providers: [ApplicationService,HttpErrorHandler,DataStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
