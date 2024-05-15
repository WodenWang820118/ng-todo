import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TaskFormComponent } from '../components/task-form.component';

@Component({
  selector: 'app-add-task-view',
  standalone: true,
  imports: [AsyncPipe, TaskFormComponent],
  template: ` <app-task-form></app-task-form> `,
})
export class AddTaskViewComponent {}
