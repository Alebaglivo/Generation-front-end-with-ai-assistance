import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-tabs',
  standalone: true,
  templateUrl: './template-tabs.component.html',
  styleUrls: ['./template-tabs.component.scss']
})
export class TemplateTabsComponent {
  @Input() tabs: { title: string; content: string }[] = [];
  activeIndex = 0;

  selectTab(index: number) {
    this.activeIndex = index;
  }
}