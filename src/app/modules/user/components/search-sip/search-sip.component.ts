import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDataService } from '../../services/personal-data/personal-data.service';
import { DataUserService } from '../../services/storage/data-user.service';
import { Return } from '../../interfaces/return.interface';

@Component({
  selector: 'app-search-sip',
  templateUrl: './search-sip.component.html',
  styleUrls: ['./search-sip.component.scss'],
})
export class SearchSipComponent implements OnInit{
  constructor(
    private router: Router,
    private personalDataService: PersonalDataService,
    private dataUserService: DataUserService
  ) {}
  public result: Return = {};
  public sip!: number;

  ngOnInit(): void {
    console.log(this.sip);
  }

  public test(value: any) {
    console.log(value.target.value);
    this.sip = value.target.value;
  }

  public onSearch() {
    this.personalDataService
      .getPersonalData(this.sip)
      .subscribe((resp: Return) => {
        this.result = resp;
        console.log(resp);
        if (this.result.return?.error == null) {
          this.dataUserService.setData(this.result);
          sessionStorage.setItem("personalData", JSON.stringify(this.result));
          this.router.navigate(['/home/user/see'], {
            queryParams: { sip: this.sip },
          });
        }
      });
  }
}
