import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-relation',
  template: `
    <p>
      relation works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class RelationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
