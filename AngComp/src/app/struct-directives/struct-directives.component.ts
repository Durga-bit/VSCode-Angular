import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directives',
  templateUrl: './struct-directives.component.html',
  styleUrls: ['./struct-directives.component.css']
})
  export class StructDirectivesComponent  {
    course:string="java";
    employees = [
      {empId:101, empName:'chiru'},
      {empId:102, empName:'uday'},
    ]
  
  
  }
