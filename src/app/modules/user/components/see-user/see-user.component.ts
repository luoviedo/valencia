import { Component } from '@angular/core';
import { PersonalData } from '../../interfaces/personal-data.interface';
import { PersonalDataService } from '../../services/personal-data/personal-data.service';
import { DataUserService } from '../../services/storage/data-user.service';

@Component({
  selector: 'app-see-user',
  templateUrl: './see-user.component.html',
  styleUrls: ['./see-user.component.scss'],
})
export class SeeUserComponent {
  constructor(private personalDataService: PersonalDataService, private dataUserService: DataUserService) {}
  public result: PersonalData = {};
  public iniciales: string = '';

  ngOnInit(): void {
    this.personalDataService.getPersonalData().subscribe((resp:PersonalData) => {
      this.result = resp;
      this.dataUserService.setData(this.result);
      if (this.result.iden?.ape1 && this.result.iden?.nomb) {
        this.iniciales =
          this.result.iden?.nomb.substring(0, 1) +
          this.result.iden?.ape1.substring(0, 1);
      }
    });
  }
}
