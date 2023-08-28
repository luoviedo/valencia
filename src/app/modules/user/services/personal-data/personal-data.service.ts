import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonalData } from '../../interfaces/personal-data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalDataService {
  result!: PersonalData;
  constructor(private http: HttpClient) {}

  public getPersonalData(): Observable<any> {
    return this.http.get(`../../../../assets/data/datos-personales.json`);
  }
}
