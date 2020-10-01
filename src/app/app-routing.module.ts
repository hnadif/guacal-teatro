import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeatroComponent} from './components/teatro/teatro.component';
import {ContactComponent} from './components/contact/contact.component'
import {CompagnieComponent} from './components/compagnie/compagnie.component'
import {ActeurComponent} from './components/acteur/acteur.component'
import {EventsComponent} from './components/events/events.component'

const routes: Routes = [
  { path:'', component: TeatroComponent },
  { path:'index', component: TeatroComponent },
  { path:'compagnie', component: CompagnieComponent },
  { path:'acteurs', component: ActeurComponent },
  { path:'events', component: EventsComponent },
  { path:'contact', component: ContactComponent },
  { path:'**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
