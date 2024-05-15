import { Component } from '@angular/core';
import { TasksComponent } from '../components/tasks.component';
import { HeaderComponent } from 'src/app/shared/components/header.component';
import { FooterComponent } from 'src/app/shared/components/footer.component';

@Component({
  selector: 'app-tracker-view',
  standalone: true,
  imports: [TasksComponent, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-tasks></app-tasks>
    <app-footer></app-footer>
  `,
})
export class TrackerViewComponent {}
