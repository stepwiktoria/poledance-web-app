import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './modules/classes/classes.component';
import { ContactComponent } from './modules/contact/contact.component';
import { InstructorsComponent } from './modules/instructors/instructors.component';

const routes: Routes = [

  {
    path: 'contact', component: ContactComponent

  },

  
  {
    path: 'instructors', component: InstructorsComponent

  },


  {
    path: 'classes', component: ClassesComponent

  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
