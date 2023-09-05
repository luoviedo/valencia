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
  public titleMed: string = 'Profesional de medicina';
  public titleEnf: string = 'Profesional de enfermería';
  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser() {
    this.dataUserService.user.subscribe((data) => (this.personalData = data));
  }

  getTooltipText() {
    return `${this.titleMed} 
    ${this.personalData.asig?.pro?.nif}  -  ${this.personalData.asig?.pro?.noap}
    
    ${this.titleEnf} 
    ${this.personalData.asig?.enf?.nif}  -  ${this.personalData.asig?.enf?.noap}`;
  }
}
