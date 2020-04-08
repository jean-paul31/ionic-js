import { Component, OnInit } from '@angular/core';
import { RecettesService } from './recettes.service';
import { Recette } from "./recette.model";



@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {
  recettes: Recette[];
  constructor(private recettesService: RecettesService) { }

  ngOnInit() {
    this.recettes = this.recettesService.getAllRecettes();
  }

}
