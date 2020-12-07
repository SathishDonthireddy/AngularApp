import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.sass']
})
export class ParentcomponentComponent implements OnInit {
  studentList: any[] =
    [
    { StudentID: '1', FirstName: 'Sathish', LastName: 'Reddy', Gender: 'Male'},
    { StudentID: '2', FirstName: 'Geetha', LastName: 'Reddy', Gender: 'Female' },
    { StudentID: '3', FirstName: 'Srihan', LastName: 'Reddy', Gender: 'Male' }
    ];
    // , DOB: '23/10/88' 
  constructor() { }
  selectedStudentCountRadioButton: string = 'All';
  ngOnInit(): void {
  }

  getTotalStudentsCount(): number {
    return this.studentList.length;
  }
  getMaleStudentsCount(): number {
    return this.studentList.filter(std => std.Gender === 'Male').length;
  }
  getFemaleStudentsCount(): number {
    return this.studentList.filter(std => std.Gender === 'Female').length;
  }
  onStudentCountRadioButtonChange(SelectedRadioButtonValue: string): void {
    this.selectedStudentCountRadioButton = SelectedRadioButtonValue;
}
}
