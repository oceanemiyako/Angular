import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionPersonneComponent } from './gestion-personne/gestion-personne.component';
import { AjoutPersonneComponent } from './ajout-personne/ajout-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionPersonneComponent,
    AjoutPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
