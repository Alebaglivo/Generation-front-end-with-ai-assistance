import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-stepper',
  standalone: true,
  templateUrl: './template-stepper.component.html',
  styleUrls: ['./template-stepper.component.scss']
})
export class TemplateStepperComponent {
  @Input() steps: string[] = [];
  activeStep = 0;

  next() {
    if (this.activeStep < this.steps.length - 1) this.activeStep++;
  }

  previous() {
    if (this.activeStep > 0) this.activeStep--;
  }
}