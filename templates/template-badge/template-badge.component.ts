import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-badge',
  standalone: true,
  templateUrl: './template-badge.component.html',
  styleUrls: ['./template-badge.component.scss']
})
export class TemplateBadgeComponent {
  @Input() text = 'Badge';
  @Input() color = '#007bff'; // [AI]: Any valid CSS color
}