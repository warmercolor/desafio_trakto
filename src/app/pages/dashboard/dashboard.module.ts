import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routes';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule { }
