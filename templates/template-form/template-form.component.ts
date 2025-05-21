import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {
  @Input() formTitle = 'Generic Form'; // [IA]: Can be replaced by the entity name (e.g., Create Customer)
  @Input() fields: { name: string; label: string; type: string }[] = []; // [IA]: Field definitions

  formGroup = new FormGroup({});

  ngOnInit() {
    // [IA]: Dynamically create form controls based on field definitions
    this.fields.forEach(field => {
      this.formGroup.addControl(field.name, new FormControl(''));
    });
  }

  submit() {
    // [IA]: Place for calling backend API with form data
    console.log(this.formGroup.value);
  }
}