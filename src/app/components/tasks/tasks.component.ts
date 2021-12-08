import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // construct the TaskService with alias taskService
  // inject the TaskService into the constructor and the service and its methods are available to the component
  // resolving the promise from the service and assigning the result to the tasks property
  // the tasks property is now available to the component

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> this.tasks=tasks);
  }

  deleteTask(task: Task): void {
    this.taskService
      .deleteTask(task)
      .subscribe(()=> this.tasks=this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.udpateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe((task)=> this.tasks.push(task));
  }
}
