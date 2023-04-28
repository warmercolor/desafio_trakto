import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { OptionsComponent } from './../../components/options/options.component';
import { HomepageRoutes } from './homepage.routes';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [
    HomepageComponent,
    OptionsComponent
  ],
  imports: [
  SharedModule,
    CommonModule,
    RouterModule.forChild(HomepageRoutes)
  ]
})
export class HomepageModule { }
