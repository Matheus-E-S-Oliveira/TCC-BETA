import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { DashboardComponent } from './features/home/components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: 'home/dashboard', component: DashboardComponent },
  // outras rotas...
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
