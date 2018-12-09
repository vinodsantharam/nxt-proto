import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  isExpanded = false;

  constructor() { }

  ngOnInit() {
  }

  toogleMenuSize(){
    this.isExpanded = !this.isExpanded;
  }
}
