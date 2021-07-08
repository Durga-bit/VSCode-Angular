import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = 'assets/employees1.json'; 
  constructor(private httpClient:HttpClient) { }
  getEmployeeDetails(){
     return this.httpClient.get(this.url)
  }
}
