import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {

  constructor() { }
  ColumnSpan:number=2;
  name :string ='Sathish';
  Branch :string ='IT';
  MobileNumber :number =9014675532;
  Gender :string ='Male';
  ngOnInit(): void {
  }

}
