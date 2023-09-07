import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DataUserService } from '../../services/storage/data-user.service';
import type { Return } from '../../interfaces/return.interface';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  constructor(private dataUserService: DataUserService) {}
  public personalData!: Return;
  public titleMed = 'Profesional de medicina';
  public titleEnf = 'Profesional de enfermería';
  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser() {
    this.dataUserService.user.subscribe((data) => (this.personalData = data));
  }

  getTooltipText() {
    return `${this.titleMed} 
    ${this.personalData.return?.asig?.pro?.nif}  -  ${this.personalData.return?.asig?.pro?.noap}
    
    ${this.titleEnf} 
    ${this.personalData.return?.asig?.enf?.nif}  -  ${this.personalData.return?.asig?.enf?.noap}`;
  }
}
