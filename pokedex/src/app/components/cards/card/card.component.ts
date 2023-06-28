import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input({required: false}) height: number = 100;
  @Input({required: false}) width: number = 100 ;
  @Input({required: false}) background: String = '#000000' ;
  @Input({required: false}) rounded: Number = 0;

  ngOnInit():void {
  }
}