import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { StudentComponent } from './student/student.component';
import { OnewaybindingComponent } from './onewaybinding/onewaybinding.component';
import { TwowaycomponentComponent } from './twowaycomponent/twowaycomponent.component';
import { FormsModule } from '@angular/forms';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { IfblockComponent } from './ifblock/ifblock.component';
import { SwitchcaseComponent } from './switchcase/switchcase.component';
import { ClassdirectiveComponent } from './classdirective/classdirective.component';
import { PipesComponent } from './pipes/pipes.component';
import { MyTitlePipe } from './my-title.pipe';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    StudentComponent,
    OnewaybindingComponent,
    TwowaycomponentComponent,
    ParentcomponentComponent,
    ChildcomponentComponent,
    IfblockComponent,
    SwitchcaseComponent,
    ClassdirectiveComponent,
    PipesComponent,
    MyTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
