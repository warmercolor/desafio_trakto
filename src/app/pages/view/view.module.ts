import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { ViewComponent } from './view.component';
import { ViewRoutes } from './view.routes';


@NgModule({
  declarations: [
    ViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ViewRoutes),
  ]
})
export class ViewModule { }
