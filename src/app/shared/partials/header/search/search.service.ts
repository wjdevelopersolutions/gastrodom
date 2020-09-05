import { Recent } from '../../../interfaces/all.interface';

export class SearchService {

	recentSearch: Recent[] = [
		{ image: 'face02.jpg', message: 'Dixon Juma' },
		{ image: 'face03.jpg', message: 'Asociación Popular de Ahorros y Préstamos' },
		{ image: 'face04.png', message: 'Codecademy' },
		{ image: 'face05.jpg', message: 'Deno.Js En Español' },
		{ image: 'face06.jpg', message: 'Pablo Tilotta' },
		{ image: 'face07.jpg', message: 'Amanda Smith' },
		{ image: 'face08.jpg', message: 'Jonathan Hernandez Ynoa' },
		{ image: 'face09.jpg', message: 'Svelte JS Español' }
	];

	constructor() { }

	find(): Recent[] {
		return this.recentSearch.slice();
	}
}
