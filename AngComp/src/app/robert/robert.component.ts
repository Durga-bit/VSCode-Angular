import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-robert',
  templateUrl: './robert.component.html',
  styleUrls: ['./robert.component.css']
})
export class RobertComponent{
  name:string='Robert';
  Age:number=29;
  Robert={name:'Robert',age:'29',Address:'Guntur',Mobile:'9872562412'};
}
