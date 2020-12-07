import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
StdList : any[]=
[
  {StdID:'1',Name:'SATHISH',MobileNumber:'9014675532',DOB:'23/10/1988',Currency:'10',gender :'Male'},
  {StdID:'2',Name:'Srihan',MobileNumber:'9014675532',DOB:'23/10/1988',Currency:'10',gender :'Male'},
  {StdID:'3',Name:'Geetha',MobileNumber:'9014675532',DOB:'23/10/1988',Currency:'10',gender :'Female'}
]
today:number=Date.now();
currency:number=123243;
}
