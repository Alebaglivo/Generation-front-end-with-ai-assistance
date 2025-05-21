import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-select',
  standalone: true,
  templateUrl: './template-select.component.html',
  styleUrls: ['./template-select.component.scss']
})
export class TemplateSelectComponent {
  @Input() label = 'Select an option';
  @Input() options: string[] = []; // [AI]: List of string values
  @Input() selected: string = '';  // [AI]: Bound value
}