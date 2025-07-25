import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Learning } from './components/learning/learning';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Learning],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LearningApp');
}
