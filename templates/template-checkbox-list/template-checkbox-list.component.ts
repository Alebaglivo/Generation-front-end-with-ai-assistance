import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-checkbox-list',
  standalone: true,
  templateUrl: './template-checkbox-list.component.html',
  styleUrls: ['./template-checkbox-list.component.scss']
})
export class TemplateCheckboxListComponent {
  @Input() options: { label: string; checked: boolean }[] = []; // [AI]: List of checkbox items
}