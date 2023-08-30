import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslocoModule } from '@ngneat/transloco';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { CardElementComponent } from './components/card-element/card-element.component';

@NgModule({
  declarations: [HeaderComponent, AccordionItemComponent, CardElementComponent],
  imports: [CommonModule,TranslocoModule],
  exports: [HeaderComponent,AccordionItemComponent,CardElementComponent],
})
export class SharedModule {}
