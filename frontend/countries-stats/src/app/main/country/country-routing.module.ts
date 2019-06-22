import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountryDetailsComponent } from './country-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'country' },
      { path: 'country', component: CountryDetailsComponent },
      {
        path: 'country/:id',
        component: CountryDetailsComponent
      },
      { path: '', redirectTo: 'country' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
