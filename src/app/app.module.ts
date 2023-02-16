import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './modules/contact/contact.component';
import { InstructorsComponent } from './modules/instructors/instructors.component';
import { ClassesComponent } from './modules/classes/classes.component';
import { HomeComponent } from './modules/home/home.component';
import { OfferComponent } from './modules/offer/offer.component';
import { PricesComponent } from './modules/prices/prices.component';
import { OfferkidsComponent } from './modules/offerkids/offerkids.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    AppFooterComponent,
    ContactComponent,
    InstructorsComponent,
    ClassesComponent,
    HomeComponent,
    OfferComponent,
    PricesComponent,
    OfferkidsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
