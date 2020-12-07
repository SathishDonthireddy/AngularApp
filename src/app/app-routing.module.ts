import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';


const routes: Routes = [
{path:'Parent',component:ParentcomponentComponent},
{path:'Child',component:ChildcomponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
