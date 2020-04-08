import { Injectable } from '@angular/core';
import { Recette } from './recette.model';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  private recettes: Recette[] = [
    {
     id: "r1",
     title: "burger",
     imageUrl: "https://www.snacking.fr/upload/news/xlarge/news_3509.jpg",
     ingredients:["pain", "oignons", "tomates", "steack haché"]
    },
    {
     id: "r2",
     title: "pizza",
     imageUrl: "https://www.atelierdeschefs.com/media/recette-e30299-pizza-pepperoni-tomate-mozza.jpg",
     ingredients:["pate à pizza", "oignons", "sauce tomate", "chorizo", "fromage"]
   }];
  constructor() { }
}
