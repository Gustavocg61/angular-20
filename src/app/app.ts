import { Component, signal } from '@angular/core';
import { Petrobras } from './components/petrobras/petrobras';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Petrobras],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Gustavo-Primeiro-Projeto');
}
