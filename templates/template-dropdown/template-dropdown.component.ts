import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-dropdown',
  standalone: true,
  templateUrl: './template-dropdown.component.html',
  styleUrls: ['./template-dropdown.component.scss']
})
export class TemplateDropdownComponent {
  @Input() label = 'Options';
  @Input() options: { text: string; action: () => void }[] = [];
  open = false;

  toggle() {
    this.open = !this.open;
  }
}