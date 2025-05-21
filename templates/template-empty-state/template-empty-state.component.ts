import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-empty-state',
  standalone: true,
  templateUrl: './template-empty-state.component.html',
  styleUrls: ['./template-empty-state.component.scss']
})
export class TemplateEmptyStateComponent {
  @Input() title = 'No Data';
  @Input() description = 'There is currently nothing to display.';
}