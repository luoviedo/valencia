import { Component, OnInit } from '@angular/core';
import { DataUserService } from '../../services/storage/data-user.service';
import { PersonalData } from '../../interfaces/personal-data.interface';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  constructor(private dataUserService: DataUserService) {}
  public personalData!: PersonalData;
  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser() {
    this.dataUserService.user.subscribe((data) => this.personalData = data);
  }
}
