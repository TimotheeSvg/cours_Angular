import {Component, Input, SimpleChanges} from '@angular/core';
import {
  Pokemon,
  PokemonBase,
  PokemonResponseInformation,
  PokemonService, Stat, Stats,
  Type
} from "../../../services/pokemon.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card-pokemon-pokedex',
  templateUrl: './card-pokemon-pokedex.component.html',
  styleUrls: ['./card-pokemon-pokedex.component.css']
})
export class CardPokemonPokedexComponent {

  @Input({required: true}) pokemonBase: PokemonBase = {name:'', url:''};
  pokemon$: Observable<PokemonResponseInformation> | null = null;
  pokemonInformation: PokemonResponseInformation | null = null;
  constructor(private service: PokemonService) {}
  pokemon: Pokemon | null = null;

  img: String = './assets/images/defaultPokemon.jpg';


  ngOnInit() {
    this.pokemon$ = this.service.getAllInformations(this.pokemonBase.url)
    this.pokemon$.subscribe({
      next: value => {
        this.pokemonInformation = value;
        if (this.pokemonInformation.sprites.front_default?.length > 0) {
          this.img = this.pokemonInformation.sprites.front_default
        }

        this.pokemon = {
          name: this.pokemonInformation.name,
          img: this.pokemonInformation.sprites.front_default,
          types: this.pokemonInformation.types.map((e:Type) => {
            return e.type.name
          }),

          stats : {
            health: this.pokemonInformation?.stats.find((e) => e.stat.name === 'hp'),
            attack: this.pokemonInformation?.stats.find((e) => e.stat.name === 'attack'),
            defense: this.pokemonInformation?.stats.find((e) => e.stat.name === 'defense')
          }
        };
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('pokemonBase' in changes) {
      let temp = changes['pokemonBase'].currentValue
    }
  }
}
