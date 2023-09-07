import { Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import type { Return } from '../../interfaces/return.interface';

@Injectable()
export class DataUserService{
  private user$ = new BehaviorSubject<Return>({});
  user = this.user$.asObservable();
  
  setData(dataUser:Return){
    this.user$.next(dataUser); 
  }

  getData(){
    return this.user$.asObservable();
  }
}