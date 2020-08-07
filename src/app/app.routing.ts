//imports necesarios

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar los componentes a los cuales hacer una pagina esclusiva

import { HomeComponent } from './components/home/home.component';
import { Persona1Component } from './components/persona1/persona1.component';
import { Persona2Component } from './components/persona2/persona2.component';
import { Persona3Component } from './components/persona3/persona3.component';
import { Persona4Component } from './components/persona4/persona4.component';

//array de rutas

const appRoutes: Routes=[
    {path:'',component:HomeComponent},
    {path:'inicio',component:HomeComponent},
    {path: 'persona-1',component:Persona1Component},
    {path: 'persona-2',component:Persona2Component},
    {path: 'persona-3',component:Persona3Component},
    {path: 'persona-4',component:Persona4Component},

];

//exportar el mudulo de rutas

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);