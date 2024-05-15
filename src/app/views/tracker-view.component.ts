import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TasksComponent } from '../components/tasks.component';

@Component({
  selector: 'app-tracker-view',
  standalone: true,
  imports: [AsyncPipe, TasksComponent],
  template: ` <app-tasks></app-tasks> `,
})
export class TrackerViewComponent {}
