import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NavController,
  ModalController,
  ActionSheetController,
  LoadingController,
  AlertController
} from '@ionic/angular';
import { Subscription } from 'rxjs';

import { LogementsService } from '../../logements.service';
import { Logement } from '../../logement.model';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { BookingService } from '../../../bookings/booking.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-logement-detail',
  templateUrl: './logement-detail.page.html',
  styleUrls: ['./logement-detail.page.scss']
})
export class LogementDetailPage implements OnInit, OnDestroy {
  logement: Logement;
  isBookable = false;
  private logementSub: Subscription;
  isLoading = false;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private logementsService: LogementsService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private bookingService: BookingService,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('logementId')) {
        this.navCtrl.navigateBack('/logements/tabs/discover');
        return;
      }
      this.isLoading = true;
      this.logementSub = this.logementsService
        .getLogement(paramMap.get('logementId'))
        .subscribe(logement => {
          this.logement = logement;
          this.isBookable = logement.userId !== this.authService.userId;
          this.isLoading = false;
        }, error =>{
          this.alertCtrl.create({
            header: 'Une erreur est survenue',
            message: 'Impossible de charger le logement',
            buttons:[{
              text:'OK',
              handler: ()=>{
                this.router.navigate(['/logements/tabs/discover'])
              }
            }]
          }
          ).then(alertEl =>{
            alertEl.present();
          })
        });
    });
  }

  onBookLogement() {
    // this.router.navigateByUrl('/logements/tabs/discover');
    // this.navCtrl.navigateBack('/logements/tabs/discover');
    // this.navCtrl.pop();
    this.actionSheetCtrl
      .create({
        header: 'Choose an Action',
        buttons: [
          {
            text: 'Select Date',
            handler: () => {
              this.openBookingModal('select');
            }
          },
          {
            text: 'Random Date',
            handler: () => {
              this.openBookingModal('random');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      })
      .then(actionSheetEl => {
        actionSheetEl.present();
      });
  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedLogement: this.logement, selectedMode: mode }
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        if (resultData.role === 'confirm') {
          this.loadingCtrl
            .create({ message: 'Booking logement...' })
            .then(loadingEl => {
              loadingEl.present();
              const data = resultData.data.bookingData;
              this.bookingService
                .addBooking(
                  this.logement.id,
                  this.logement.title,
                  this.logement.imageUrl,
                  data.firstName,
                  data.lastName,
                  data.guestNumber,
                  data.dateDebut,
                  data.dateFin
                )
                .subscribe(() => {
                  loadingEl.dismiss();
                });
            });
        }
      });
  }

  ngOnDestroy() {
    if (this.logementSub) {
      this.logementSub.unsubscribe();
    }
  }
}
