import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: { title: 'CountryDetails' }
  },
  { path: '**', redirectTo: 'details' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
