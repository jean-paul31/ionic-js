import { Injectable } from '@angular/core';
import { Logement } from "./logement.model";

@Injectable({
  providedIn: 'root'
})
export class LogementsService {

  private _logements: Logement[] = [
    new Logement(
      "L1",
      "maison", 
      "belle et grande maison", 
      "https://i.f1g.fr/media/eidos/805x536_crop/2019/11/13/XVM537cdbb8-053c-11ea-966a-e596318edd1f-805x536.jpg", 
      250
    ),
    new Logement(
      "L2",  
      "loft", 
      "grande hauteur sous plafond", 
      "https://r-cf.bstatic.com/images/hotel/max1024x768/112/112954309.jpg", 
      150
    ),
    new Logement(
      "L3",  
      "appartement", 
      "appartement de charactère", 
      "https://q-xx.bstatic.com/images/hotel/max1024x768/195/195449379.jpg", 
      80
    ),
]

  get logements(){
      return [...this._logements];
    }

  constructor() { }

  
}
