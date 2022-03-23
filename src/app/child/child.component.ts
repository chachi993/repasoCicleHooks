import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  counter = 0;
  interval: any = 0;

  constructor() {
    console.log("child Constructor is called");
   }

  ngOnInit(): void {
    console.log("child OnInit is called");

  // setInterval(() => {
  //    this.counter = this.counter + 1;
  //    console.log(this.counter);
  //     }, 1000);
   this.interval =   setInterval(() => {
        this.counter = this.counter + 1;
        console.log(this.counter);
         }, 1000);
   }
  ngOnDestroy(): void {
    // console.log("onDestroy: " + this.counter);
    // clearInterval(this.counter);
    clearInterval(this.interval);
    console.log("child onDestroy is called");
  }

}
