import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from './components/teste/teste';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, TesteComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('Gustavo-Primeiro-Projeto');
}
 