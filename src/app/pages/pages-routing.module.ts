import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { PagesComponent } from './pages.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { LayoutComponent } from './layout/layout.component';

const ROUTE: Route[] = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: WelcomeComponent }
    ]
  }
];

@NgModule({
    imports: [ RouterModule.forChild(ROUTE) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
