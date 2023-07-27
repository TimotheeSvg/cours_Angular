import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokemonPokedexComponent } from './card-pokemon-pokedex.component';

describe('CardPokemonPokedexComponent', () => {
  let component: CardPokemonPokedexComponent;
  let fixture: ComponentFixture<CardPokemonPokedexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPokemonPokedexComponent]
    });
    fixture = TestBed.createComponent(CardPokemonPokedexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
