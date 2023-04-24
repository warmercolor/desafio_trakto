import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { OptionsComponent } from './../../components/options/options.component';
import { HeaderComponent } from './../../components/header/header.component';
import { HomepageRoutes } from './homepage.routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomepageComponent,
    OptionsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomepageRoutes)
  ]
})
export class HomepageModule { }
