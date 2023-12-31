import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeUserComponent } from './components/see-user/see-user.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { PpisComponent } from './components/ppis/ppis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SearchSipComponent } from './components/search-sip/search-sip.component';
import { TranslocoModule } from '@ngneat/transloco';
import { SocialHistoryComponent } from './components/social-history/social-history.component';
import { FirstDiagnosticLayerComponent } from './components/first-diagnostic-layer/first-diagnostic-layer.component';
import { NecessityComponent } from './components/necessity/necessity.component';
import { DataUserService } from './services/storage/data-user.service';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    SeeUserComponent,
    PersonalInformationComponent,
    PpisComponent,
    SearchSipComponent,
    SocialHistoryComponent,
    FirstDiagnosticLayerComponent,
    NecessityComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [ToastrService,DataUserService]
})
export class UserModule { }
