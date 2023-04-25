import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routes';
import { BannerComponent } from './../../components/banner/banner.component';
import { FrameComponent } from './../../components/frame/frame.component';
import { CardComponent } from './../../components/card/card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BannerComponent,
    FrameComponent,
    CardComponent
  ],
  imports: [
  ScrollingModule,
    SharedModule,
    CommonModule,
    RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule { }
