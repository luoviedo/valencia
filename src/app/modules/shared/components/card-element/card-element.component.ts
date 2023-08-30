import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent {
  @Input() fecha!: string;
  @Input() titulo!: string;
  @Input() color!: string;
}
