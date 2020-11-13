export class Measurement {
  constructor(
    public measurementID: number,
    public ovenID: number,
    public dateTime: Date,
    public powerAmount: number,
    public temperature: number
  ) {}
}
