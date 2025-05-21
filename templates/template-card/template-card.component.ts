import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-card',
  standalone: true,
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent {
  @Input() title = 'Default Title'; // [IA]: Can be dynamically replaced with entity name (e.g., Customer)
  @Input() fields: { label: string; value: any }[] = []; // [IA]: Array of label/value pairs to be injected
  @Input() actions?: { label: string; callback: () => void }[]; // [IA]: Optional dynamic actions
}