import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonDetail } from 'src/app/models/pokemon-detail';
import { StatApi } from 'src/app/models/stat-api';
import { FooterService } from 'src/app/services/footer.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  pokemonDetails!:PokemonDetail;
  isVisible: boolean = false;

  constructor( private footerService: FooterService,
               private pokemonService: PokemonService ) {}

  ngOnInit(): void {
    this.getPokemon();
    this.getFooterState();
  }

  getFooterState() {
    this.footerService.getFooterState().subscribe((isVisible:boolean) => {
      this.isVisible = isVisible;
    });
  }

  getPokemon(): void {
    this.footerService.getPokemonDetail().subscribe((pokemon:Pokemon) => {
      if ( pokemon ) {
        this.pokemonService.getPokemonStats(pokemon?.id).subscribe( (apiStats:StatApi[]) => {
          this.pokemonDetails = {
            ...pokemon,
            stats: apiStats.map((stat:StatApi) => ({
              name: stat.stat.name,
              base: stat.base_stat.toString(),
            }))
          }
          this.footerService.setFooterState(true);
        });
      }
    });
  }

}
