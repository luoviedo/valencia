import { Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { PersonalData } from '../../interfaces/personal-data.interface';

@Injectable()
export class DataUserService{
  constructor(){}
  private user$ = new BehaviorSubject<PersonalData>({});
  user = this.user$.asObservable();
  
  setData(dataUser:PersonalData){
    this.user$.next(dataUser); 
  }

  getData(){
    return this.user$.asObservable();
  }
}