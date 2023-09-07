import { Component } from '@angular/core';
import { PersonalData } from '../../interfaces/personal-data.interface';
import { PersonalDataService } from '../../services/personal-data/personal-data.service';
import { DataUserService } from '../../services/storage/data-user.service';
import { Return } from '../../interfaces/return.interface';

@Component({
  selector: 'app-see-user',
  templateUrl: './see-user.component.html',
  styleUrls: ['./see-user.component.scss'],
})
export class SeeUserComponent {
  constructor(private dataUserService: DataUserService) {}
  public personalData!: Return;
  public result: Return = {};
  public iniciales: string = '';
  public data: any;
  ngOnInit(): void {
    this.setDataUser();
  }

  public setDataUser() {
    this.data = sessionStorage.getItem('personalData');
    this.result = JSON.parse(this.data);
    if (this.result.return?.iden?.ape1 && this.result.return?.iden?.nomb) {
      this.iniciales =
        this.result.return?.iden?.nomb.substring(0, 1) +
        this.result.return?.iden?.ape1.substring(0, 1);
    }
    console.log('data: ', this.result);
    this.dataUserService.setData(this.result);
  }
}
