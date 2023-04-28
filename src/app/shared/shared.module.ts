import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../components/header/header.component';
import { CookieModule } from 'ngx-cookie';
import { ServiceTrakto } from '../resources/service/api.service';
import { MatMenuModule } from '@angular/material/menu';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { FrameComponent } from '../components/frame/frame.component';
import { ButtonFrameComponent } from '../components/button-frame/button-frame.component';
import { SkeletonComponent } from '../components/skeleton/skeleton.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  providers: [
    CookieModule,
    ServiceTrakto,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  declarations: [
    HeaderComponent,
    FrameComponent,
    ButtonFrameComponent,
    SkeletonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    FrameComponent,
    ButtonFrameComponent,
    SkeletonComponent,
    CardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
