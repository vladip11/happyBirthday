import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Persona1Component } from './components/persona1/persona1.component';
import { Persona2Component } from './components/persona2/persona2.component';
import { Persona3Component } from './components/persona3/persona3.component';
import { Persona4Component } from './components/persona4/persona4.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Persona1Component,
    Persona2Component,
    Persona3Component,
    Persona4Component,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
