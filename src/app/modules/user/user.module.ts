import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeUserComponent } from './components/see-user/see-user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { PpisComponent } from './components/ppis/ppis.component';



@NgModule({
  declarations: [
    SeeUserComponent,
    PersonalInformationComponent,
    PpisComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
