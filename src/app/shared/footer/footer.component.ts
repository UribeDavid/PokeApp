import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  pokemonDetails:any = null;
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
    this.footerService.getPokemonDetail().subscribe((pokemon:any) => {
      if ( pokemon ) {
        this.pokemonService.getPokemonStats(pokemon?.id).subscribe( (stats:any) => {
          this.pokemonDetails = {
            ...pokemon,
            stats: stats.map((stat:any) => ({
              name: stat.stat.name,
              base: stat.base_stat,
            }))
          }
          this.footerService.setFooterState(true);
        });
      }
    });
  }

}
