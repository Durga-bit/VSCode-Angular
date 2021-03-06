import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent{
  number1:any;
  number2:any;
  number3:any;
  result:any;
  value:any;

  constructor(private calculatorService:CalculatorService)
  {
    
  }
  operation(value:any)
  {
    var value1=(Number)(this.number1)
    var value2=(Number)(this.number2)
    var value3=(Number)(this.number3)
    this.number3=this.calculatorService.getResult(value1,value2,value3,value)
  }
}
