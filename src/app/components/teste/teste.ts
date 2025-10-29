import { Component, OnInit } from '@angular/core';
import { ReceberApi } from '../../services/receber-api';
import { ItauModel } from './itau-model';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, ],
  templateUrl: './teste.html',
  styleUrls: ['./teste.scss'],
})
export class TesteComponent implements OnInit{
  itau!: ItauModel;
  
  constructor(private service: ReceberApi){}

  getData(): void {
    this.service.getItau().subscribe(response => {
      console.log(response)
      this.itau = response;
    })
  }
 
  ngOnInit(): void{
    this.getData();
  }
}

