import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isChild = false;
  firstName = '';

  /*ViewChildren don’t include elements that exist within the ng-content tag.*/
  @ViewChildren('div') pepitoPerez!: QueryList<any>;

  @ViewChildren(ChildComponent, { read: ElementRef })
  juanita!: QueryList<ElementRef>;

  /*ContentChildren includes only elements that exists within the ng-content tag.*/
  //@ContentChildren()

  constructor() {
    console.log('Parent Constructor is called');
  }

  ngOnInit(): void {
    console.log('Parent OnInit is called');
    console.log('OnInit ' + this.firstName);
  }

  ngOnChanges() {
    console.log('Parent Onchanges');
    console.log('Onchanges ' + this.firstName);
  }

  ngDoCheck() {
    console.log('Parent DoCheck');
    console.log('DoCheck ' + this.firstName);
  }

  /*The QueryList is initialized only before the ngAfterViewInit lifecycle hook,
  therefore, is available only from this point. */
  ngAfterViewInit() {
    const myFirst = this.pepitoPerez.changes;
    this.pepitoPerez.forEach((divInstance: any) => console.log(divInstance));
    this.juanita.forEach((childInstance) => console.log(childInstance));
    console.log(this.pepitoPerez.length);
    console.log(this.pepitoPerez.toArray());
    console.log(myFirst);
  }

  toggleChild() {
    console.log(this.isChild);
    this.isChild = !this.isChild;
    console.log(this.isChild);
  }
}
