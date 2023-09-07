import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import type { Return } from '../../interfaces/return.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonalDataService {
  constructor(private http: HttpClient) {}

  public getPersonalData(sip: number): Observable<Return> {
    if (environment.flag) {
      return this.http.get(`../../../../assets/data/datos-personales.json`);
    } else {
      return this.http.get(`${environment.apiUrl}getuser/${sip}`);
    }
  }
}
