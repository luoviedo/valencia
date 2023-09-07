import type { Cen } from "./cen.interface";
import type { Enf } from "./enf.interface";
import type { Pro } from "./pro.interface";

export interface Asig {
  cen?: Cen;
  pro?: Pro;
  enf?: Enf;
}
