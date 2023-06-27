import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  imgPokeballOpen:String = './assets/images/navBar/pokeballOpen.png'
  imgPokeballClose:String = './assets/images/navBar/pokeball.png'
  imgPokedexLabel:String = './assets/images/navBar/pokedexLabel.png';
  imgHomeLabel:String = './assets/images/navBar/homeLabel.png';
  imgPokedex:String = this.imgPokeballClose;
  imgHome:String = this.imgPokeballClose;

  enterSectionPokeball(enter:Boolean):void {
    if (enter) {
      this.imgPokedex = this.imgPokeballOpen;
    } else {
      this.imgPokedex = this.imgPokeballClose;
    }
  }
  enterSectionHome(enter:Boolean):void {
    if (enter) {
      this.imgHome = this.imgPokeballOpen;
    } else {
      this.imgHome = this.imgPokeballClose;
    }
  }
}
