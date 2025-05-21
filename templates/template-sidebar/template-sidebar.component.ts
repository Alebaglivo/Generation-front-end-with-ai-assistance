import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-sidebar',
  standalone: true,
  templateUrl: './template-sidebar.component.html',
  styleUrls: ['./template-sidebar.component.scss']
})
export class TemplateSidebarComponent {
  @Input() links: { label: string; icon?: string; route: string }[] = []; // [AI]: List of nav items
}
