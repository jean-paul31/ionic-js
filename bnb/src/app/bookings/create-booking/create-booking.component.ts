import { Component, OnInit, Input } from '@angular/core';
import { Logement } from 'src/app/logements/logement.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})

export class CreateBookingComponent implements OnInit {
  
  @Input() selectedLogement: Logement;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onBookLogement(){
    this.modalCtrl.dismiss({message:'message de test'}, 'confirm');
  }

}
