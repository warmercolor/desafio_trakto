import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './../components/header/header.component';
import { CookieModule } from 'ngx-cookie';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoginService } from '../resources/service/login.service';

@NgModule({
  providers: [
    CookieModule,
    LoginService
  ],
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adicione esta linha
})
export class SharedModule { }
