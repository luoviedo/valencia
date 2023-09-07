import type { Cal } from "./cal.interface";
import type { Espe } from "./espe.interface";
import type { Loc } from "./loc.interface";
import type { Prv } from "./prv.interface";

export interface DirRes {
  prv?: Prv;
  loc?: Loc;
  cal?: Cal;
  espe?: Espe;
  copo?: string;
}
