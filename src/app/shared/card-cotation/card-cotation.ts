import {Component, Input} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {Results} from '../../models/cotacao-results';

@Component({
  selector: 'app-card-cotation',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardFooter,

  ],
  templateUrl: './card-cotation.html',
  styleUrl: './card-cotation.scss',
})
export class CardCotation {
  @Input()
  requestedAT!: string;

  @Input()
  result!: Results;

  getData(): void {
    console.log('getData');
  }
}
