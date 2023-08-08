import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeUserComponent } from './components/see-user/see-user.component';

const routes: Routes = [
  {
    path: 'see',
    title: 'Ver',
    component: SeeUserComponent
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }