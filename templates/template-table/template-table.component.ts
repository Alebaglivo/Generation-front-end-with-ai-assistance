import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-table',
  standalone: true,
  templateUrl: './template-table.component.html',
  styleUrls: ['./template-table.component.scss']
})
export class TemplateTableComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
}