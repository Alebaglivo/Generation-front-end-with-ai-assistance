import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-progress-bar',
  standalone: true,
  templateUrl: './template-progress-bar.component.html',
  styleUrls: ['./template-progress-bar.component.scss']
})
export class TemplateProgressBarComponent {
  @Input() value = 0;
  @Input() max = 100;
  @Input() label?: string;
  @Input() color = '#28a745'; // [AI]: Optional progress color
}