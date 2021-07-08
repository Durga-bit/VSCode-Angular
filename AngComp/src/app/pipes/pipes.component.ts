import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
  export class PipesComponent {
    name:string = 'suresh kumar'
    today:any = new Date()
    dob:any = new Date(1986, 3, 13)
    customer = {
      custId:101, custName:'suresh'
    }
 }
 
