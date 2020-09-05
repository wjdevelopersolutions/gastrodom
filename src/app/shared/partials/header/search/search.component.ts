import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SearchService } from './search.service';

import { Recent } from '../../../interfaces/all.interface';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styles: [
	]
})
export class SearchComponent implements OnInit {

	@ViewChild('f') searchForm: NgForm;
	recentSearch: Recent[];

	constructor(private _searchService: SearchService) { }

	onSubmit() {
		console.log(this.searchForm);
	}

	onCancel() {
		this.searchForm.reset();
	}

	ngOnInit(): void {
		this.recentSearch = this._searchService.find();
	}

}
