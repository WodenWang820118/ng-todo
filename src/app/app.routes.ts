import { Routes } from '@angular/router';
import { TrackerViewComponent } from './views/tracker-view.component';
import { AboutViewComponent } from './views/about-view.component';
import { AddTaskViewComponent } from './views/add-task-view.component';

export const APP_ROUTES: Routes = [
  { path: '', component: TrackerViewComponent },
  { path: 'add-task', component: AddTaskViewComponent },
  { path: 'about', component: AboutViewComponent },
];
