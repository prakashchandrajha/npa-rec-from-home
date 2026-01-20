import { Component, OnInit } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ComponentLoadService } from '../../../../services/component-load.service';
import { BorrowerBasicDetailsComponentComponent } from '../../child/borrower-basic-details-component/borrower-basic-details-component.component';
import { BorrowerBasicDetails } from '../../../../interfaces/borrower-basic-details.interface';

/**
 * Main NPA Form Component
 * Manages the overall NPA handover form structure and coordinates with child components
 * Form initialization and validation are handled by child components
 */
@Component({
  selector: 'app-npa-main-form-component',
  imports: [NgComponentOutlet, ReactiveFormsModule, BorrowerBasicDetailsComponentComponent],
  templateUrl: './npa-main-form-component.component.html',
  styleUrl: './npa-main-form-component.component.css'
})
export class NpaMainFormComponentComponent implements OnInit {
  // Form sections loaded from service
  sections: any[];

  // Main form group - structure is managed by child components
  npaForm: FormGroup;

  constructor(
    private componentLoadService: ComponentLoadService,
    private fb: FormBuilder
  ) {
    this.sections = this.componentLoadService.getFormSections();
    this.npaForm = this.fb.group({});
  }

  ngOnInit(): void {
    console.log('Form structure initialized:', this.npaForm.value);
  }

  /**
   * Handle form submission
   * Logs the complete form data and typed basic details
   * Validation is handled by child components
   */
  onSubmit(): void {
    const formData = this.npaForm.value;
    // Accessing the specific group data safely
    const basicDetails: BorrowerBasicDetails = formData.basicDetails;

    console.log('Form submitted successfully:', formData);
    console.log('Basic Details:', basicDetails);

    // TODO: Send data to backend service
  }

  /**
   * Handle validity change from child components
   */
  onValidityChange(isValid: boolean): void {
    console.log('Child component validity changed:', isValid);
    // Can be used to track overall form validity if needed
  }
}
