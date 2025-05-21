import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-date-picker',
  standalone: true,
  templateUrl: './template-date-picker.component.html',
  styleUrls: ['./template-date-picker.component.scss']
})
export class TemplateDatePickerComponent {
  @Input() label = 'Choose a date';
  selectedDate: string = '';
}