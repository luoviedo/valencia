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
  constructor(private personalDataService: PersonalDataService, private dataUserService: DataUserService) {}
  public result: Return = {};
  public iniciales: string = '';

  ngOnInit(): void {
    this.personalDataService.getPersonalData().subscribe((resp:Return) => {
      this.result = resp;
      console.log(resp);
      if(this.result.return?.error == null){
        this.dataUserService.setData(this.result);
        if (this.result.return?.iden?.ape1 && this.result.return?.iden?.nomb) {
          this.iniciales =
            this.result.return?.iden?.nomb.substring(0, 1) +
            this.result.return?.iden?.ape1.substring(0, 1);
        }
      }
      
    });
  }
}
