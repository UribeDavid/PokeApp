import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { TypeApi } from 'src/app/models/type-api';
import { FooterService } from 'src/app/services/footer.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons:Pokemon[] = [];
  isMarginBottomAdded: boolean = false;
  pokemonsSelected:string[] = [];

  constructor( private pokemonService: PokemonService,
               private footerService: FooterService ) { }

  ngOnInit() {
    this.definePokemons();
    this.getFooterState();
  }

  getFooterState() {
    this.footerService.getFooterState().subscribe((isVisible:boolean) =>{
      this.isMarginBottomAdded = isVisible;
    })
  }

  definePokemons() {
    this.pokemonService.getPokemons().subscribe((data) => {
      data.forEach((item:any) => {
        this.pokemonService.getPokemonData(item).subscribe((response:any) => {
          const pokemon = {
            name: response.name,
            id: response.id,
            imgUrl: response.sprites.other.dream_world.front_default,
            firstType: response.types[0].type.name,
            types: response.types.map((type:TypeApi) => type.type.name),
            isSelected: false
          }
          this.pokemons.push(pokemon);
        });
      })
    });
  }

  setSelect(id:string) {
    if (this.pokemonsSelected.includes(id)) return;
    this.pokemonsSelected.push(id);
    if ( this.pokemonsSelected.length > 2 ) this.pokemonsSelected.shift();
    this.pokemons.forEach(pokemon => 
      pokemon.isSelected = this.pokemonsSelected.includes(pokemon.id)
    );
  }
}
