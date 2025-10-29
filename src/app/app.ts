import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GComponent } from "./components/g-component/g-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('app-gustavo');
}
