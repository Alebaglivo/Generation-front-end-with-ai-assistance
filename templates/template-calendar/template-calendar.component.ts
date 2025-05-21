import { Component } from '@angular/core';

@Component({
  selector: 'app-template-calendar',
  standalone: true,
  templateUrl: './template-calendar.component.html',
  styleUrls: ['./template-calendar.component.scss']
})
export class TemplateCalendarComponent {
  today = new Date();
  daysInMonth: number[] = [];

  ngOnInit() {
    const days = new Date(this.today.getFullYear(), this.today.getMonth() + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);
  }
}