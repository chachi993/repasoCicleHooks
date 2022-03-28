import { Component, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isChild = false;
  firstName = "";

  @ViewChildren("div")
  pepitoPerez!: QueryList<any>;

  @ViewChildren(ChildComponent)
  juanita!: QueryList<ChildComponent>;

  constructor() {
    console.log("Parent Constructor is called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit is called");
    console.log("OnInit "+ this.firstName)

  }

  ngOnChanges() {
    console.log("Parent Onchanges");
    console.log("Onchanges "+ this.firstName)

  }

  ngDoCheck() {
    console.log("Parent DoCheck");
    console.log("DoCheck "+this.firstName)
  }

  ngAfterViewInit() {
    const myFirst = this.pepitoPerez.changes;
    this.pepitoPerez.forEach((divInstance:any) => console.log(divInstance));
    this.juanita.forEach(childInstance => console.log(childInstance));
    console.log(myFirst);
  }

  toggleChild(){
    console.log(this.isChild);
    this.isChild = !this.isChild;
    console.log(this.isChild);
  }
}
