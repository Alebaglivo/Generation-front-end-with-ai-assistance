import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-accordion',
  standalone: true,
  templateUrl: './template-accordion.component.html',
  styleUrls: ['./template-accordion.component.scss']
})
export class TemplateAccordionComponent {
  @Input() sections: { title: string; content: string; expanded?: boolean }[] = [];

  toggle(index: number): void {
    this.sections[index].expanded = !this.sections[index].expanded;
  }
}
