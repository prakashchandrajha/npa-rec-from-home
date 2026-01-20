import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { BorrowerBasicDetails } from '../../../../interfaces/borrower-basic-details.interface';

/**
 * Borrower Basic Details Component
 * Owns its form structure and handles all validation logic
 */
@Component({
  selector: 'app-borrower-basic-details-component',
  imports: [ReactiveFormsModule],
  templateUrl: './borrower-basic-details-component.component.html',
  styleUrl: './borrower-basic-details-component.component.css'
})
export class BorrowerBasicDetailsComponentComponent implements OnInit, OnDestroy {
  @Input() parentForm: FormGroup | null = null;
  @Input() groupName: string = 'basicDetails';

  // Emit validity status to parent component
  @Output() validityChange = new EventEmitter<boolean>();

  // Child's own form group
  basicDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.basicDetailsForm = this.createForm();
  }

  ngOnInit(): void {
    if (this.parentForm) {
      // Add this form group to parent form
      this.parentForm.addControl(this.groupName, this.basicDetailsForm);
      this.subscribeToValueChanges();
    }
  }

  ngOnDestroy(): void {
    if (this.parentForm) {
      this.parentForm.removeControl(this.groupName);
    }
  }

  /**
   * Create the form structure with all controls and validators
   */
  private createForm(): FormGroup {
    return this.fb.group({
      divisionAndRegionalOffice: [''],
      accountName: [''],
      npaClassificationDate: [''],
      businessActivity: [''],
      boardMembers: this.fb.array([]),
      registeredAddress: [''],
      corporateOfficeAddress: [''],
      factoryAddress: [''],
      factoryRunningCondition: [''],
      factoryNotRunningSince: [''],
      factoryLeasedOut: [''],
      lesseeName: [''],
      lesseeContactDetails: ['']
    });
  }

  /**
   * Subscribe to value changes to emit validity status
   */
  private subscribeToValueChanges(): void {
    this.basicDetailsForm.valueChanges.subscribe(() => {
      const isValid = this.basicDetailsForm.valid;
      this.validityChange.emit(isValid);
    });
  }

  /**
   * Check if a field has errors
   */
  hasError(fieldName: string): boolean {
    const control = this.basicDetailsForm.get(fieldName);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  /**
   * Get error message for a field
   */
  getErrorMessage(fieldName: string): string {
    const control = this.basicDetailsForm.get(fieldName);
    if (!control || !control.errors) {
      return '';
    }

    if (control.errors['required']) {
      return 'This field is required';
    }

    return 'Invalid input';
  }

  /**
   * Get form data as typed interface
   */
  get formData(): BorrowerBasicDetails {
    return this.basicDetailsForm.value as BorrowerBasicDetails;
  }
}
