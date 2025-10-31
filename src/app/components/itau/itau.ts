import { Component, OnInit } from '@angular/core';
import { ReceberApi } from '../../services/receber-api';
import { CotacaoModel } from '../../models/cotacao-model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-itau',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, ],
  templateUrl: './itau.html',
  styleUrls: ['./itau.scss'],
})
export class ItauComponent implements OnInit{

  itau!: CotacaoModel;

  constructor(private service: ReceberApi){
    this.getData()
  }

  getData(): void {
    this.service.getItau().subscribe(response => {
      this.itau = response;
    })
  }

  ngOnInit(): void{
    this.getData();
  }
}

