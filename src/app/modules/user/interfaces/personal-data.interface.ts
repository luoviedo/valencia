import { Acre } from './acre.interface';
import { Asig } from './asig.interface';
import { Iden } from './iden.interface';
import { Loca } from './loca.interface';

export interface PersonalData {
  error?: string;
  iden?: Iden;
  loca?: Loca;
  acre?: Acre;
  asig?: Asig;
}
