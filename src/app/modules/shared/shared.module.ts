import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TranslocoModule } from '@ngneat/transloco';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';

@NgModule({
  declarations: [HeaderComponent, AccordionItemComponent],
  imports: [CommonModule,TranslocoModule],
  exports: [HeaderComponent,AccordionItemComponent],
})
export class SharedModule {}
