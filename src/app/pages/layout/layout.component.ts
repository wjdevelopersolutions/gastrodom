import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  title: string = 'gastrodom';

  constructor() { }

  ngOnInit(): void {
  }

}
