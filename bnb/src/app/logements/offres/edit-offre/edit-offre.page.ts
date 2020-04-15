import { Component, OnInit } from '@angular/core';
import { Logement } from '../../logement.model';
import { LogementsService } from '../../logements.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offre',
  templateUrl: './edit-offre.page.html',
  styleUrls: ['./edit-offre.page.scss'],
})
export class EditOffrePage implements OnInit {
   
  logement: Logement;

  constructor(private logementsService: LogementsService,
              private route: ActivatedRoute,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('logementId')) {
        this.navCtrl.navigateBack('/logements/tabs/offres');
        return;
      }
      this.logement = this.logementsService.getLogement(paramMap.get('logementId'));
    })
  }
}
