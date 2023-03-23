import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private pokemonDetail: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private isFooterShown: BehaviorSubject<boolean> = new BehaviorSubject<any>(false);

  constructor() { }

  setPokemonDetail(pokemon:any) {
    this.pokemonDetail.next(pokemon);
  }

  getPokemonDetail() {
    return this.pokemonDetail.asObservable();
  }

  setFooterState(isShown:boolean) {
    this.isFooterShown.next(isShown);
  }

  getFooterState() {
    return this.isFooterShown.asObservable();
  }
  
}
