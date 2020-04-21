export class Logement {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageUrl: string,
    public prix: number,
    public dispoDebut: Date,
    public dispoFin: Date,
    public userId: string
  ) {}
}
