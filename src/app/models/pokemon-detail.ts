import { Pokemon } from "./pokemon";
import { Stat } from "./stat";

export interface PokemonDetail extends Pokemon {
    stats: Stat[]
}