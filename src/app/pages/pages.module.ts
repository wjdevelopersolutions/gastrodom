import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';

const PAGES = [
  PagesComponent,
  LayoutComponent,
  LoginComponent,
  NoPageFoundComponent,
  RegisterComponent,
  WelcomeComponent
]

@NgModule({
  declarations: PAGES,
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: PAGES
})
export class PagesModule { }
