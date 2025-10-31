import { Component, signal } from '@angular/core';
import { Petrobras } from './components/petrobras/petrobras';
import {ItauComponent} from './components/itau/itau';
import {Vale} from './components/vale/vale';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Petrobras, ItauComponent, Vale],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Gustavo-Primeiro-Projeto');
}
