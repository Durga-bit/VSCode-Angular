import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { AngularService} from '../services/angular.service';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent{
  customerss:any=[]
  customerss1:any=[
    {"empId":104,"empName":"angular","salary":20000},
    {"empId":105,"empName":"Liam","salary":19000},
    {"empId":106,"empName":"Robert","salary":18000}
  ]





  constructor(private dataService:AngularService) {
    dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
  }
  ngOnInit(): void {  }
  modifiedData(){


     // this.customerss.push( {"empId":104,"empName":"prem","salary":20000})
     // this.customerss.push( {"empId":105,"empName":"kumar","salary":19000})
      //this.customerss.push( {"empId":106,"empName":"kedari","salary":18000})


     for(var i=0;i<this.customerss1.length;i++){
    this.dataService.changeData(this.customerss1[i])
     }
  }
}
