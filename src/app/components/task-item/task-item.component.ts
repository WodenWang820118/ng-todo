import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Tasks'; // pass the interface; forcing the type declaration
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input () task!: Task; // the properties are set to public so that they can be used in the template
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    // the event emitter will emit the task to the parent component
    // which is the tasks component
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

}
