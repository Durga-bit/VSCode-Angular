import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {

  title = 'Assignment 11';
  Counter = 1000;
 
  countChangedHandler(count: number) {
    this.Counter = count;
    console.log(count);
  }

}