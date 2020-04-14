import { Component, OnInit, Input } from '@angular/core';
import { Recette } from '../recette.model';

@Component({
  selector: 'app-recette-item',
  templateUrl: './recette-item.component.html',
  styleUrls: ['./recette-item.component.scss'],
})
export class RecetteItemComponent implements OnInit {

  @Input() recetteItem: Recette;

  constructor() { }

  ngOnInit() {}

}
