import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryDetailsComponent } from './country-details.component';

const routes: Routes = [
  { path: ':countryIso', component: CountryDetailsComponent },
  { path: '', component: CountryDetailsComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
