import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponent } from './my/my.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sir_practise_app';
}
