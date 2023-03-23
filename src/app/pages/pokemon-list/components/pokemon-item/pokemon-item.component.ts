import { Component, Input } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent {
  @Input() pokemon:any = {};

  constructor( private footerService: FooterService ) {}

  onSelected() {
    this.footerService.setPokemonDetail({...this.pokemon});
  }
  
}
