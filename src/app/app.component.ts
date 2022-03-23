import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isChild = false;

  constructor() {
    console.log("Parent Constructor is called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit is called");
  }
  toggleChild(){
    console.log(this.isChild);
    this.isChild = !this.isChild;
    console.log(this.isChild);
  }
}
