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

  public telMovil: number | undefined;
  public telFijo: number | undefined;
  ngOnInit(): void {
    this.getDataUser();
  }

  public getDataUser() {
    this.dataUserService.user.subscribe((data) => (this.personalData = data));
    this.getTeles();
  }

  public getTooltipText() {
    const titleMed = 'Profesional de medicina';
    const titleEnf = 'Profesional de enfermería';
    let medicoTxt = '';
    let enfermeroTxt = '';
    if (this.personalData.return?.asig?.pro?.nif !== undefined) {
      medicoTxt = `${titleMed} 
      ${this.personalData.return?.asig?.pro?.nif}  -  ${this.personalData.return?.asig?.pro?.noap}`;
    }

    if (this.personalData.return?.asig?.enf?.nif !== undefined) {
      enfermeroTxt = `${titleEnf} 
      ${this.personalData.return?.asig?.enf?.nif}  -  ${this.personalData.return?.asig?.enf?.noap}`;
    }

    return `${medicoTxt} 
    
    ${enfermeroTxt} `;
  }

  private getTeles() {
    if (this.personalData.return?.loca?.tele !== undefined) {
      const teles: number[] = this.personalData.return?.loca?.tele;
      for (let i = 0; i < teles.length; i++) {
        if (teles[i].toString().substring(0, 1) == '9') {
          this.telFijo = teles[i];
        } else {
          this.telMovil = teles[i];
        }
      }
    }
  }
}
