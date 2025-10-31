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
  Petrol!: ItauModel;
  constructor(private service: ReceberApi){
    this.getData()
    this.getPetrobras
    }

  getData(): void {
    this.service.getItau().subscribe(response => {
      console.log(response)
      this.itau = response;
    })
  }
   getPetrobras(): void {
    this.service.getPetrobras().subscribe(response => {
      console.log(response)
      this.Petrol = response;
    })
  }
  ngOnInit(): void{
    this.getData();
    this.getPetrobras();
  }
}

