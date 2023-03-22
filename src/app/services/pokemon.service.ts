import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { MainHttpCallerService } from './main-http-caller.service';

const POKEMON_API: string = 'https://pokeapi.co/api/v2/pokemon?limit=151'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private mainHttpCallerService: MainHttpCallerService ) { }

  getPokemons() {
    return this.mainHttpCallerService.get( POKEMON_API ).pipe(
      map( (response:any) => response.results )
    );
    /* .pipe(
      map((data:any) => {
        data.results.map( this.buildPokemonData )
      })
    ); */
  }

  getPokemonData(pokemon:any) {
    /* const response:any = await lastValueFrom(this.mainHttpCallerService.get( pokemon?.url ));
    return {
      name: response.name,
      id: response.id,
      imgUrl: response.sprites.other.dream_world.front_default 
    } */
    return this.mainHttpCallerService.get( pokemon?.url );
  }
}
