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




@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    AppFooterComponent,
    ContactComponent,
    InstructorsComponent,
    ClassesComponent,
   

   
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
