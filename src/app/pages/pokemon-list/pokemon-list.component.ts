import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons:any[] = [];
  isMarginBottomAdded: boolean = false;

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
            types: response.types.map((type:any) => type.type.name).join(', ')
          }
          this.pokemons.push(pokemon);
        });
      })
    });
  }
}
