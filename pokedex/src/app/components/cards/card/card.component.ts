import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input({required: false}) height: number = 20;
  @Input({required: false}) width: number = 20;
  @Input({required: false}) background: string = '#FFFFFF' ;
  @Input({required: false}) border: string | null = null;
  @Input({required: false}) classes: string | null = null;
  @Input({required: false}) borderHeight: number = 0;
  @Input({required: false}) rounded: number = 0;

  ngOnInit():void {
    if (this.border !== null) {
      this.borderHeight = 0.2;
    }
  }
}
