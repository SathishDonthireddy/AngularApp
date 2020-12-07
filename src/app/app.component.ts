import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  //template :'<h3>{{title}}</h3>',
  templateUrl: './Template.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  //title = 'Student Form';
   //Server side routing

   constructor(private router : Router){}
   GetParent()
   {
       this.router.navigate(['/Parent']);
   }
   GetChild()
   {
       this.router.navigate(['/Child']);
   }
}
