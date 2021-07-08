import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { AngularService} from '../services/angular.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  customerss:any=[]
 customerss1:any=[
  {"empId":101,"empName":"Angular","salary":20000},
  {"empId":102,"empName":"Liam","salary":19000},
  {"empId":103,"empName":"robert","salary":18000}
 ]

  constructor(private dataService:AngularService) {

  }
  ngOnInit(): void {
    this.dataService.currentMsg.subscribe(successMsg => this.customerss = successMsg)
   }
  modifiedData(){
  // this.customerss.push({"empId":101,"empName":"prem","salary":20000})
   //this.customerss.push({"empId":102,"empName":"kumar","salary":19000})
  //this.customerss.push({"empId":103,"empName":"kedari","salary":18000})

    //for(var c of this.customerss)
    //this.dataService.changeData(c)

    for(var i=0;i<this.customerss1.length;i++){
      this.dataService.changeData(this.customerss1[i])
       }

  }
}
