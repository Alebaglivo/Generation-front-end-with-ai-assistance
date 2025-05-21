import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-list',
  standalone: true,
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent {
  @Input() title = 'List';
  @Input() items: { label: string, description?: string }[] = []; // [IA]: Inject a list of items
}