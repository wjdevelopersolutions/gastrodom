import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const ROUTE: Route[] = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTE) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
