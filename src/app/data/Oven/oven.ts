import { Measurement } from '../Measurement/measurement';

export class Oven {
  constructor(
    public ovenID: number,
    public address: string,
    public measurements: Array<Measurement>
  ) {}
}
