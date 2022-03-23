import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isChild = false;
  firstName = "";

  constructor() {
    console.log("Parent Constructor is called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit is called");
    console.log("OnInit "+this.firstName)
  }

  ngOnChanges() {
    console.log("Parent Onchanges");
    console.log("Onchanges "+this.firstName)

  }

  ngDoCheck() {
    console.log("Parent DoCheck");
    console.log("DoCheck "+this.firstName)
  }

  toggleChild(){
    console.log(this.isChild);
    this.isChild = !this.isChild;
    console.log(this.isChild);
  }
}
