import { Component, OnInit } from '@angular/core';
import { Recette } from '../recette.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecettesService } from '../recettes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.page.html',
  styleUrls: ['./recette-detail.page.scss'],
})
export class RecetteDetailPage implements OnInit {
  
  loadedRecette: Recette;

  constructor(private activatedRoute:ActivatedRoute,
              private recettesService: RecettesService,
              private router: Router,
              private alertCtrl: AlertController) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('recetteId')) {
        this.router.navigate(['./recettes']);
        return;
      }
      const recetteId = paramMap.get('recetteId');
      this.loadedRecette = this.recettesService.getRecette(recetteId);
    })
  }

  onDeleteRecette(){
    this.alertCtrl.create(
        { 
        header: 'Supprimer ?',
        message: 'Voulez vous supprimer cette recette?',
        buttons: [{
          text: 'Annuler',
          role: 'Cancel'
        },
        {
          text: "effacer",
          handler: () => {
            this.recettesService.deleteRecette(this.loadedRecette.id);
            this.router.navigate(['/recettes']);
          }
        }
      ]
      }).then(uneAlerte =>{
        uneAlerte.present();
     })
   
    
  }

}
