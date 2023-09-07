import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalData } from '../../interfaces/personal-data.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonalDataService {
  result!: PersonalData;
  constructor(private http: HttpClient) {}

  public getPersonalData(sip: number): Observable<any> {
    if (environment.flag) {
      return this.http.get(`../../../../assets/data/datos-personales.json`);
    } else {
      return this.http.get(`${environment.apiUrl}test/${sip}`);
    }
  }
}
