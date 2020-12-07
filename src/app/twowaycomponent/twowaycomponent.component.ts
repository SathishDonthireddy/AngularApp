import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaycomponent',
  //This is only to display value which is added in input box
  //template : `<div><input [value]='Name'  > <br>Entered Value is : {{Name}}</div>`,
  //This is to display dynamically entered value
  //template : `<div><input [value]='Name' (input) = 'Name = $event.target.value'> <br>Entered Value is : {{Name}}</div>`,

  template : `<div><input [(ngModel)]='Name'  > <br>Entered Value is : {{Name}}</div>`,
  //templateUrl: './twowaycomponent.component.html',
  styleUrls: ['./twowaycomponent.component.sass']
})
export class TwowaycomponentComponent implements OnInit {
  Name :string='2 way data binding';
  constructor() { }

  ngOnInit(): void {
  }

}
