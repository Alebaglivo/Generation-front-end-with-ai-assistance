import { Component } from '@angular/core';
import { TemplateNavbarComponent } from '../template-navbar/template-navbar.component';
import { TemplateSidebarComponent } from '../template-sidebar/template-sidebar.component';
import { TemplateCardComponent } from '../template-card/template-card.component';
import { TemplateAccordionComponent } from '../template-accordion/template-accordion.component';

@Component({
  selector: 'app-template-demo-page',
  standalone: true,
  imports: [
    TemplateNavbarComponent,
    TemplateSidebarComponent,
    TemplateCardComponent,
    TemplateAccordionComponent
  ],
  templateUrl: './template-demo-page.component.html',
  styleUrls: ['./template-demo-page.component.scss']
})
export class TemplateDemoPageComponent {
  navbarActions = [
    { icon: 'fa fa-user', tooltip: 'Profile', callback: () => alert('Profile clicked') },
    { icon: 'fa fa-sign-out', tooltip: 'Logout', callback: () => alert('Logout clicked') }
  ];

  sidebarLinks = [
    { label: 'Dashboard', route: '/dashboard', icon: 'fa fa-tachometer' },
    { label: 'Settings', route: '/settings', icon: 'fa fa-cog' }
  ];

  cardFields = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john@example.com' }
  ];

  accordionSections = [
    { title: 'Section 1', content: 'Content for section 1', expanded: false },
    { title: 'Section 2', content: 'Content for section 2', expanded: true }
  ];
}
