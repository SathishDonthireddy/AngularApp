import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  //********Interpolation binding */
  //template : `<h3> {{'First Name : '+Firstname +' Last Name :'+ Lastname}} </h3>`,
  //template : `<h3>10+6*5-6= {{10+6*5-6}} </h3>`, //Using expressions
  //template : `Firstname is {{Firstname?Firstname:'Not Exists'}}`, //using ternary operator
  //template : `<h3>{{GetName()}}</h3>`, //using method
  //template : `<h3><span innerHTML={{PropertyBindingTitle}}></span></h3><div><img src={{ImgPath}}/> </div> displaying image


  //*********Property Binding */
  //template : `<h3><span [innerHTML]='Firstname'></span></h3>`, //using method
  //template : `<h3><span [innerHTML]='PropertyBindingTitle'></span></h3> <div><img [src]='ImgPath'/> </div>`, //using method
  

  //*******Attrubute binding */
  //Is about acheving for the html attributes which are having any DOM properties, this can be acheived by using above 2 bindings like below
  //interpolation : attr.colspan={{Columnspan}}, and property : [attr.colspan]='ColumnSpan'

  //*****Class binding */
  //template : `<div><button class='FontColor' class={{ClassToApply}}> Submit </button> </div>`,
  //template : `<div><button class='colorClass' [ngClass]='AddCSSClasses()'>Click Me</button> </div>`,

  //******Style attribute */
  //template : `<div><button style='color:red;backgroubd-color=yellow'>Click Me</button> </div>`,
  //template : `<div><button style='color:red;' [style.fontWeight]="Isbold?'bold':'normal'">Click Me</button> </div>`,
  //template : `<div><button style='color:red;' [ngStyle]="AddCSSClasses()">Click Me</button> </div>`,
  
  //Event Binding
  template : `<div><button style='color:red;' on-click="DisplayName()">Click Me</button> </div>`,


  styles:['./onewaybinding.component.html'],
  //This is also one way to acheive class property(using TemplateUrl)
  //templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.sass']
})
export class OnewaybindingComponent implements OnInit {
  Firstname : string='Sathish';
  Lastname :string='Reddy';
  PropertyBindingTitle:string='Welcome to property binding';
  ImgPath :string='./assets/Student.jpg';
  ClassToApply :string='italicClass boldClass colorclass';
  Isbold:boolean=true;
  GetName() :string
  {
    return this.Firstname+' '+this.Lastname;
  }

  ApplyBoldClass: boolean = true;
    ApplyItalicsClass: boolean = true;
    AddCSSClasses() {
        let Cssclasses = {
            boldClass: this.ApplyBoldClass,
            italicsClass: this.ApplyItalicsClass
        };
        return Cssclasses;
    }


    FontSize: number = 40;
    IsItalic: boolean = true;
    AddCSSStyles() {
        let CssStyles = {
            'font-weight': this.Isbold ? 'bold' : 'normal',
            'font-style': this.IsItalic ? 'italic' : 'normal',
            'font-size.px': this.FontSize
        };
        return CssStyles;
      }
  constructor() { }

  ngOnInit(): void {
  }
DisplayName() :void{
  console.log('Button is clicked..!!!');
}
}
