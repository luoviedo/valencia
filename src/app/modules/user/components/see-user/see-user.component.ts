import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DataUserService } from '../../services/storage/data-user.service';
import type { Return } from '../../interfaces/return.interface';

@Component({
  selector: 'app-see-user',
  templateUrl: './see-user.component.html',
  styleUrls: ['./see-user.component.scss'],
})
export class SeeUserComponent implements OnInit {
  constructor(private dataUserService: DataUserService) {}
  public telMovil: number | undefined;
  public telFijo: number | undefined;
  public result: Return = {};
  public iniciales = '';
  public data: any;
  ngOnInit(): void {
    this.setDataUser();
    this.getTeles();
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

  private getTeles() {
    if (this.result.return?.loca?.tele !== undefined) {
      const teles: number[] = this.result.return?.loca?.tele;
      for (let i = 0; i < teles.length; i++) {
        if (teles[i].toString().substring(0, 1) == '9') {
          this.telFijo = teles[i];
        } else {
          this.telMovil = teles[i];
        }
      }
    }
  }

  public getTooltipText() {
    let address = '';

    if (this.result.return?.loca?.dirRes?.cal?.calCod?.tiv !== undefined) {
      address += `${this.result.return?.loca?.dirRes?.cal?.calCod?.tiv} `;
    }

    if (this.result.return?.loca?.dirRes?.cal?.calCod?.nomb !== undefined) {
      address += `${this.result.return?.loca?.dirRes?.cal?.calCod?.nomb} `;
    }

    if (this.result.return?.loca?.dirRes?.espe?.nume !== undefined) {
      address += `${this.result.return?.loca?.dirRes?.espe?.nume} `;
    }

    if (this.result.return?.loca?.dirRes?.copo !== undefined) {
      address += `${this.result.return?.loca?.dirRes?.copo} `;
    }

    if (this.result.return?.loca?.dirRes?.loc?.nomb !== undefined) {
      address += `${this.result.return?.loca?.dirRes?.loc?.nomb} `;
    }

    if (this.result.return?.loca?.dirRes?.prv?.nomb !== undefined) {
      address += `${this.result.return?.loca?.dirRes?.prv?.nomb} `;
    }

    return `${address}`;
  }
}
