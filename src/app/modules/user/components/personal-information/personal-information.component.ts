import { Component, OnInit } from '@angular/core';
import { TranslocoService,TranslocoModule  } from '@ngneat/transloco';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  lang = this._translocoService.getActiveLang();
  constructor(private _translocoService: TranslocoService) {}

  ngOnInit(): void {
    this._translocoService.langChanges$.subscribe((response) => {
      this.lang = response;
    });
  }

  clickTranslate(language: string): void {
    this._translocoService.setActiveLang(language);
  }
}
