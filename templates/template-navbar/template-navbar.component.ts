import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-navbar',
  standalone: true,
  templateUrl: './template-navbar.component.html',
  styleUrls: ['./template-navbar.component.scss']
})
export class TemplateNavbarComponent {
  @Input() title = 'My App';
  @Input() actions: { icon: string; tooltip?: string; callback: () => void }[] = []; // [AI]: Provide icons for navbar actions
}