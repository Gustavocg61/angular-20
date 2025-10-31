import {Component, OnInit} from '@angular/core';
import {CotacaoModel} from '../../models/cotacao-model';
import {ReceberApi} from '../../services/receber-api';
import {CardCotation} from '../../shared/card-cotation/card-cotation';

@Component({
  selector: 'app-vale',
  imports: [
    CardCotation
  ],
  templateUrl: './vale.html',
  styleUrl: './vale.scss',
})
export class Vale implements OnInit {
  vale!: CotacaoModel;

  constructor(private service: ReceberApi){
    this.getData()
  }

  getData(): void {
    this.service.getVale().subscribe(response => {
      this.vale = response;
    })
  }

  ngOnInit(): void{
    this.getData();
  }
}
