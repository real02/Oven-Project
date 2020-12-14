import { Measurement } from '../Measurement/measurement';

export class Oven {
  constructor(
    public ovenId: string = '',
    public address: string = '',
    public measurements: Array<Measurement> = [],
    public locationLatitude = 0.0,
    public locationLongitude = 0.0
  ) {}
}
