import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.sass']
})
export class SwitchcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dropDownValue:string = "";
  SetDropDownValue(drpValue : any) {
    this.dropDownValue = drpValue.target.value;
}
}
