import { Cen } from "./cen.interface";
import { Enf } from "./enf.interface";
import { Pro } from "./pro.interface";

export interface Asig {
  cen?: Cen;
  pro?: Pro;
  enf?: Enf;
}
