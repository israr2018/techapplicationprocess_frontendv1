import { Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NewApplicationComponent } from './new-application/new-application.component';

export const ROUTE: Routes = [
    { path: '', component: NewApplicationComponent },
    { path: 'new-application', component: NewApplicationComponent },
    { path: 'confirmation',  component: ConfirmationComponent}
];
