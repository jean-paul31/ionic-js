import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Logement } from '../../logement.model';
import { LogementsService } from '../../logements.service';


@Component({
  selector: 'app-logement-detail',
  templateUrl: './logement-detail.page.html',
  styleUrls: ['./logement-detail.page.scss'],
})
export class LogementDetailPage implements OnInit {

  logement: Logement;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private navCtrl: NavController,
              private logementsService: LogementsService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('logementId')) {
        this.navCtrl.navigateBack('/logements/tabs.discover');
        return;
      }
      this.logement = this.logementsService.getLogement(paramMap.get('logementId'));
    })
  }


  onBookLogement(){
    // this.router.navigateByUrl('/logements/tabs/discover');
    // this.navCtrl.navigateBack('/logements/tabs/discover');
    // this.navCtrl.pop();
    this.modalCtrl.create({component: CreateBookingComponent, componentProps:{selectedLogement: this.logement} }).then(maModal=>{
      maModal.present();
      return maModal.onDidDismiss();
    });
  }

}
