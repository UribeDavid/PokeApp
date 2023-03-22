import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  
]

export const PokemonListRoutes = RouterModule.forChild(routes);