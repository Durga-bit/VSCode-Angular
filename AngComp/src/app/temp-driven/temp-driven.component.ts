import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.css']
})
export class TempDrivenComponent{
submitData(value:any)
{
  console.log(value);
}
}
