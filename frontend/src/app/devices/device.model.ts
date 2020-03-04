export class Device {
  constructor(
    public name: string,
    public policy: string,
    public username: string,
    public updatedAt?: Date,
    public createdAt?: Date,
    public lastUpdatedBy?: string,
  ) { }
}