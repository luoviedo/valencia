import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { SharedModule } from '../../modules/shared/shared.module';
//import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
//import { TranslocoRootModule } from './transloco-root.module';
import { TranslocoRootModule } from '../../../app/transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }