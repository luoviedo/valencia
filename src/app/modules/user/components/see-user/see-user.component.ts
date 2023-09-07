import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DataUserService } from '../../services/storage/data-user.service';
import type { Return } from '../../interfaces/return.interface';

@Component({
  selector: 'app-see-user',
  templateUrl: './see-user.component.html',
  styleUrls: ['./see-user.component.scss'],
})
export class SeeUserComponent implements OnInit{
  constructor(private dataUserService: DataUserService) {}
  public personalData!: Return;
  public result: Return = {};
  public iniciales = '';
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
