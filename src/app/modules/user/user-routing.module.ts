import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeUserComponent } from './components/see-user/see-user.component';
import { SearchSipComponent } from './components/search-sip/search-sip.component';
import { FirstDiagnosticLayerComponent } from './components/first-diagnostic-layer/first-diagnostic-layer.component';

const routes: Routes = [
  {
    path: 'see',
    title: 'Ver',
    component: SeeUserComponent
  },
  {
    path: 'search-sip',
    title: 'Buscar SIP',
    component: SearchSipComponent
  },
  {
    path: 'first-layer',
    component: FirstDiagnosticLayerComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }