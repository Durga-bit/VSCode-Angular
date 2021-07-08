import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  @Input() count:any;
 
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  mutulaFund() {
      this.count++;
      this.countChanged.emit(this.count);
    }
  stockMarket() {
      this.count--;
      this.countChanged.emit(this.count);
  }

}
