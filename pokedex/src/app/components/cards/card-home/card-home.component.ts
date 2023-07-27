import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent {
  @Input({required: false}) height: number = 20;
  @Input({required: false}) width: number = 20 ;
  @Input({required: false}) background: string = '#FFFFFF' ;
  @Input({required: false}) rounded: number = 0;

}
