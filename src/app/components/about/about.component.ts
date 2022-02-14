import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private UiService: UiService) { }

  ngOnInit(): void {
  }

  toggleAddTask(): void {
    this.UiService.setAddTask(false);
  }
}
