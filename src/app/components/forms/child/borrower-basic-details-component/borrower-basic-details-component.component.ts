import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-borrower-basic-details-component',
  imports: [ReactiveFormsModule],
  templateUrl: './borrower-basic-details-component.component.html',
  styleUrl: './borrower-basic-details-component.component.css'
})
export class BorrowerBasicDetailsComponentComponent {
  @Input() parentForm: FormGroup | null = null;
}
