import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NpaMainFormComponentComponent } from './components/forms/parent/npa-main-form-component/npa-main-form-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NpaMainFormComponentComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('load-rec-app');
}
