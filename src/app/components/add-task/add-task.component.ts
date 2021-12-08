import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask?: boolean;
  subscription: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value)=> this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  /**
   * The method is called when the user clicks the "Add Task" button.
   * The custom event is emitted to the tasks.component.html.
   * @returns void
   */
  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please fill all fields');
      return
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    //emit event
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
