import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        data: { preload: true, delay: 1000, title: 'home' }
      },
      {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule',
        data: { preload: true, delay: 15000, title: 'settings' }
      },
      { path: '**', redirectTo: 'home' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
