import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeatroComponent } from './components/teatro/teatro.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompagnieComponent } from './components/compagnie/compagnie.component';
import { EventsComponent } from './components/events/events.component';
import { ActeurComponent } from './components/acteur/acteur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TeatroComponent,
    ContactComponent,
    CompagnieComponent,
    EventsComponent,
    ActeurComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
