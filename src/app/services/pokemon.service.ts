import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MainHttpCallerService } from './main-http-caller.service';

const POKEMON_API: string = 'https://pokeapi.co/api/v2'
const POKEMON_ROUTE: string = 'pokemon'
/* pokemon?limit=151 */


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private mainHttpCallerService: MainHttpCallerService ) { }

  getPokemons() {
    const params = new HttpParams().append('limit', '151');
    return this.mainHttpCallerService.get( `${POKEMON_API}/${POKEMON_ROUTE}`, params ).pipe(
      map( (response:any) => response.results )
    );
  }

  getPokemonData(pokemon:any) {
    return this.mainHttpCallerService.get( pokemon?.url );
  }

  getPokemonStats(id:string) {
    return this.mainHttpCallerService.get( `${POKEMON_API}/${POKEMON_ROUTE}/${id}` ).pipe(
      map( (response:any) => response.stats )
    );
  }
}
