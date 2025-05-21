import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-detail-view',
  standalone: true,
  templateUrl: './template-detail-view.component.html',
  styleUrls: ['./template-detail-view.component.scss']
})
export class TemplateDetailViewComponent {
  @Input() title = 'Detail View';
  @Input() details: { label: string; value: any }[] = []; // [AI]: Full detail fields
}