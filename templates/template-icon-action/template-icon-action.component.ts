import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-icon-action',
  standalone: true,
  templateUrl: './template-icon-action.component.html',
  styleUrls: ['./template-icon-action.component.scss']
})
export class TemplateIconActionComponent {
  @Input() icon = 'fa-solid fa-cog'; // [AI]: Icon class to render
  @Input() tooltip = '';             // [AI]: Tooltip text
  @Input() callback: () => void = () => {}; // [AI]: Action callback
}