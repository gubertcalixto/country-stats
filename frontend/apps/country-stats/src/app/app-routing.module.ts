import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
    data: { preload: true, delay: 10000, title: 'main' }
  },
  {
    path: 'account',
    loadChildren: './account-access/account-access.module#AccountAccessModule',
    data: { preload: true, delay: 10000, title: 'account' }
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    data: { preload: true, delay: 10000, title: 'admin' }
  },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
