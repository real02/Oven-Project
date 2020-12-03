import { Measurement } from '../Measurement/measurement';

import { Location } from '../Location/location';

export class Oven {
  constructor(
    public ovenID: string = '',
    public address: string = '',
    public measurements: Array<Measurement> = [],
    public location: Location
  ) {}
}
