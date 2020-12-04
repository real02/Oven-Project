export class Measurement {
  constructor(
    public measurementID: number,
    public ovenID: number,
    public dateTime: Date,
    public powerConsumption: number,
    public temperature: number,
    public temperatureInFahrenheit: number
  ) {}
}
