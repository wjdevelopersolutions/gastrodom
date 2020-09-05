import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';

import { FormsModule } from '@angular/forms';

import { SearchService } from './header/search/search.service';

const PARTIALS = [
	HeaderComponent,
	SearchComponent
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
