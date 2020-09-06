import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';

import { FormsModule } from '@angular/forms';

import { SearchService } from './header/search/search.service';
import { CenterButtonsComponent } from "./header/center-buttons/center-buttons.component";
import { EndButtonsComponent } from "./header/end-buttons/end-buttons.component";

const PARTIALS = [
	HeaderComponent,
	SearchComponent,
  CenterButtonsComponent,
  EndButtonsComponent
]

@NgModule({
	declarations: PARTIALS,
	imports: [
		CommonModule,
		FormsModule
	],
	providers: [SearchService],
	exports: PARTIALS
})
export class PartialsModule { }
