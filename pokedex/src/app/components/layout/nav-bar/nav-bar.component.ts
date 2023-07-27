import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  imgPokeballOpen:string = './assets/images/navBar/pokeballOpen.png'
  imgPokeballClose:string = './assets/images/navBar/pokeball.png'
  imgPokedexLabel:string = './assets/images/navBar/pokedexLabel.png';
  imgHomeLabel:string = './assets/images/navBar/homeLabel.png';
  imgPokedex:string = this.imgPokeballClose;
  imgHome:string = this.imgPokeballClose;

  enterSectionPokeball(enter:boolean):void {
    if (enter) {
      this.imgPokedex = this.imgPokeballOpen;
    } else {
      this.imgPokedex = this.imgPokeballClose;
    }
  }
  enterSectionHome(enter:boolean):void {
    if (enter) {
      this.imgHome = this.imgPokeballOpen;
    } else {
      this.imgHome = this.imgPokeballClose;
    }
  }
}
