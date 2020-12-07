import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classdirective',
  templateUrl: './classdirective.component.html',
  styleUrls: ['./classdirective.component.sass']
})
export class ClassdirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  AddCSSClasses(flag:string) {
    let Cssclasses;
    if(flag == "type1")
    {
      Cssclasses = {
        'class' : true,
        'class1' : true
      }
    }
    else
    {
      Cssclasses = {
        'class' : true,
        'class1' : false
      }
    }
    return Cssclasses;
  }
}
