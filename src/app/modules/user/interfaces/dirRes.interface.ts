import { Cal } from "./cal.interface";
import { Espe } from "./espe.interface";
import { Loc } from "./loc.interface";
import { Prv } from "./prv.interface";

export interface DirRes {
  prv?: Prv;
  loc?: Loc;
  cal?: Cal;
  espe?: Espe;
  copo?: string;
}
