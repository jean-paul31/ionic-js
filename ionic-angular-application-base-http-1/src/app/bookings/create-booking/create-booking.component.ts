import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { Logement } from '../../logements/logement.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedLogement: Logement;
  @Input() selectedMode: 'select' | 'random';
  @ViewChild('f', { static: true }) form: NgForm;
  dateDebut: string;
  dateFin: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    const dispoDebut = new Date(this.selectedLogement.dispoDebut);
    const dispoFin = new Date(this.selectedLogement.dispoFin);
    if (this.selectedMode === 'random') {
      this.dateDebut = new Date(
        dispoDebut.getTime() +
          Math.random() *
            (dispoFin.getTime() -
              7 * 24 * 60 * 60 * 1000 -
              dispoDebut.getTime())
      ).toISOString();

      this.dateFin = new Date(
        new Date(this.dateDebut).getTime() +
          Math.random() *
            (new Date(this.dateDebut).getTime() +
              6 * 24 * 60 * 60 * 1000 -
              new Date(this.dateDebut).getTime())
      ).toISOString();
    }
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onBookLogement() {
    if (!this.form.valid || !this.datesValid) {
      return;
    }

    this.modalCtrl.dismiss(
      {
        bookingData: {
          firstName: this.form.value['first-name'],
          lastName: this.form.value['last-name'],
          guestNumber: +this.form.value['guest-number'],
          dateDebut: new Date(this.form.value['date-from']),
          dateFin: new Date(this.form.value['date-to'])
        }
      },
      'confirm'
    );
  }

  datesValid() {
    const dateDebut = new Date(this.form.value['date-from']);
    const dateFin = new Date(this.form.value['date-to']);
    return dateFin > dateDebut;
  }
}
