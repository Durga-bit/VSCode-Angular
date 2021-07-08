import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component{
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
