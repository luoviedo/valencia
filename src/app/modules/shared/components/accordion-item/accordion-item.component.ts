import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {
  @Input() fecha!: string;
  @Input() titulo!: string;
  @Input() descripcion!: string;
  @Input() idDiv!: string;
  @Input() classButton!: string;
}
