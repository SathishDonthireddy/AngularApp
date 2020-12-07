import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template :`<h2>
  This is Angular Training
  Giving from sathish
  </h2>
  <h3>Software Engineer</h3>`
  ,
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
Title2='This is sathish';
  constructor() { }

  ngOnInit(): void {
  }

}
