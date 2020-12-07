import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifblock',
  templateUrl: './ifblock.component.html',
  styleUrls: ['./ifblock.component.sass']
})
export class IfblockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 isValid : boolean=true;
 Check(valid:boolean)
 {
 this.isValid=valid;
 }
}
