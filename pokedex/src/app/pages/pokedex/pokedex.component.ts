import { Component } from '@angular/core';
import {
  Pokemon,
  PokemonBase,
  PokemonResponse,
  PokemonResponseInformation,
  PokemonService
} from "../../services/pokemon.service";
import {Observable} from "rxjs";


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent {
  //Utilisation d'un observable pour les infos retournées par l'api
  pokemonResponse$: Observable<PokemonResponse>
  pokemonsBase: Array<PokemonBase> = [];
  pokemonsFiltered: Array<PokemonBase> = [];

  // Ceci est une variable de template car son contenu sera afficher
  pokemonsShow: Array<PokemonBase> = [];
  currentPage: number = 1;
  itemsPerPage: number = 20;
  searchPokemon: string = '';

  constructor(private service: PokemonService) {
    this.pokemonResponse$ = service.getAllPokemon()
    this.pokemonResponse$.subscribe({
      next: value => {
        this.pokemonsBase = value.results
        this.updateDisplayedPokemons()
      }
    })
  }

  updateDisplayedPokemons() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.pokemonsBase.length);
    if (this.searchPokemon.trim() !== '') {
      this.pokemonsShow = this.pokemonsFiltered.slice(startIndex, endIndex);
    } else {
      this.pokemonsShow = this.pokemonsBase.slice(startIndex, endIndex);
    }
  }

  nextPage() {
    let maxPage = 0;
    if (this.searchPokemon.trim() !== '') {
      maxPage = Math.ceil(this.pokemonsBase.length / this.itemsPerPage);
    } else {
      maxPage = Math.ceil(this.pokemonsFiltered.length / this.itemsPerPage);
    }

    if (this.currentPage < maxPage) {
      this.currentPage++;
      this.updateDisplayedPokemons();
      this.scrollToTop();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedPokemons();
      this.scrollToTop();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSearch() {
    this.currentPage = 1;
    this.pokemonsFiltered = this.pokemonsBase.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.searchPokemon.trim().toLowerCase())
    );
    this.updateDisplayedPokemons();
  }
}
