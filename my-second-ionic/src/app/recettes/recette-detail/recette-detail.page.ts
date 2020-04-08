import { Component, OnInit } from '@angular/core';
import { Recette } from '../recette.model';
import { ActivatedRoute } from '@angular/router';
import { RecettesService } from '../recettes.service';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {
  
  loadedRecette: Recette;

  constructor(private activatedRoute:ActivatedRoute,
              private recettesService: RecettesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('recetteId')) {
        return;
      }
      const recetteId = paramMap.get('recetteId');
      this.loadedRecette = this.recettesService.getRecette(recetteId);
    })
  }

}
