import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonListRoutes } from './pokemon.routing';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent
  ],
  imports: [
    CommonModule,
    PokemonListRoutes
  ]
})
export class PokemonListModule { }
