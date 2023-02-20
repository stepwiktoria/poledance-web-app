import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './modules/classes/classes.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { InstructorsComponent } from './modules/instructors/instructors.component';
import { OfferComponent } from './modules/offer/offer.component';
import { OfferkidsComponent } from './modules/offerkids/offerkids.component';
import { PricesComponent } from './modules/prices/prices.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'instructors', 
    component: InstructorsComponent
  },
  {
    path: 'classes', 
    component: ClassesComponent
  },
  {
    path: 'prices',
    component: PricesComponent
  },
  {
    path: 'offer',
    component: OfferComponent
  },
  {
    path: 'offerkids',
    component: OfferkidsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
