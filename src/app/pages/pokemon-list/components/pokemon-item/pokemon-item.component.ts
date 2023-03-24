import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() pokemon!:Pokemon;

  constructor( private footerService: FooterService ) {}

  onSelected() {
    this.footerService.setPokemonDetail({...this.pokemon});
  }
  
}
