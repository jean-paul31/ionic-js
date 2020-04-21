export class Booking {
  constructor(
    public id: string,
    public logementId: string,
    public userId: string,
    public logementTitle: string,
    public logementImage: string,
    public firstName: string,
    public lastName: string,
    public guestNumber: number,
    public bookedFrom: Date,
    public bookedTo: Date
  ) {}
}
