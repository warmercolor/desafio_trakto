import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../components/header/header.component';
import { CookieModule } from 'ngx-cookie';
import { ServiceTrakto } from '../resources/service/api.service';
import { MatMenuModule } from '@angular/material/menu';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  providers: [
    CookieModule,
    ServiceTrakto,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
