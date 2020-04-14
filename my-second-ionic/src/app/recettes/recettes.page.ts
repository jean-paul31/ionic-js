import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecettesService } from './recettes.service';
import { Recette } from "./recette.model";



@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit, OnDestroy {
  recettes: Recette[];
  constructor(private recettesService: RecettesService) {
    
   }

  ngOnInit() {
    
    console.log(this.recettes);
  }

  ionViewWillEnter(){
    this.recettes = this.recettesService.getAllRecettes();
    console.log("ionViewWillEnter");
  }
  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }
  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
    
  }

}
