import { Component, OnInit } from '@angular/core';
import { TranslocoService  } from '@ngneat/transloco';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
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
