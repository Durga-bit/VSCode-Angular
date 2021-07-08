import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component{
  employees:any;
  errMsg:any;
  term:any
  constructor(employeeService:EmployeeService){
    
    employeeService.getEmployeeDetails().subscribe(
      result => this.employees = result,
      error => this.errMsg = error
    )
  }

}
