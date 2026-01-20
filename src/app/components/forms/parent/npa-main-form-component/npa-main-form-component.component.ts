import { Component, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComponentLoadService } from '../../../../services/component-load.service';
import { BorrowerBasicDetailsComponentComponent } from '../../child/borrower-basic-details-component/borrower-basic-details-component.component';

@Component({
  selector: 'app-npa-main-form-component',
  imports: [NgComponentOutlet, ReactiveFormsModule, BorrowerBasicDetailsComponentComponent],
  templateUrl: './npa-main-form-component.component.html',
  styleUrl: './npa-main-form-component.component.css'
})
export class NpaMainFormComponentComponent implements OnInit {

  sections: any[];
  npaForm: FormGroup;

  constructor(
    private componentLoadService: ComponentLoadService,
    private fb: FormBuilder
  ) {
    this.sections = this.componentLoadService.getFormSections();
    this.npaForm = this.fb.group({
      basicDetails: this.fb.group({
        borrowerName: ['']
      })
    });
  }

  ngOnInit() {
    console.log('Form structure:', this.npaForm.value);
  }

  get basicDetailsFormGroup(): FormGroup {
    return this.npaForm.get('basicDetails') as FormGroup;
  }

  onSubmit() {
    console.log('Form submitted:', this.npaForm.value);
  }
}
