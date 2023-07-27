import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./pages/home/home.component";
import {PokedexComponent} from "./pages/pokedex/pokedex.component";
import {ConnexionComponent} from "./pages/connexion/connexion.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pokedex', component: PokedexComponent},
  { path: 'connexion', component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
