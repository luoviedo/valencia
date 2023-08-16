import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-sip',
  templateUrl: './search-sip.component.html',
  styleUrls: ['./search-sip.component.scss'],
})
export class SearchSipComponent {
  constructor(private router: Router) {}

  public onSearch() {
    this.router.navigate(['/user/see']);
  }
}
