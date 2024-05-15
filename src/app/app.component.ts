import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="container">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
})
export class AppComponent {
  title: string = 'Task Tracker';
}
