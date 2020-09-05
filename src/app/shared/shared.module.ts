import { NgModule } from '@angular/core';

import { PartialsModule } from './partials/partials.module';
import { ComponentsModule } from './components/components.module';

const MODULOS = [
	PartialsModule,
	ComponentsModule
]

@NgModule({
	imports: MODULOS,
	exports: MODULOS
})
export class SharedModule { }
