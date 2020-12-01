import { Measurement } from '../Measurement/measurement';

export interface IOven {
  ovenID: number;
  address: string;
  measurements: Array<Measurement>;
}
