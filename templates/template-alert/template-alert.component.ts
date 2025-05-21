import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-alert',
  standalone: true,
  templateUrl: './template-alert.component.html',
  styleUrls: ['./template-alert.component.scss']
})
export class TemplateAlertComponent {
  @Input() type: 'success' | 'error' | 'info' | 'warning' = 'info';
  @Input() message = 'Alert message';
  @Input() dismissible = false;

  visible = true;

  dismiss() {
    this.visible = false;
  }
}