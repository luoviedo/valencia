import type { Acre } from './acre.interface';
import type { Asig } from './asig.interface';
import type { Iden } from './iden.interface';
import type { Loca } from './loca.interface';

export interface PersonalData {
  error?: string;
  iden?: Iden;
  loca?: Loca;
  acre?: Acre;
  asig?: Asig;
}
