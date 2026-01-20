import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDocumentationDetailsComponent6Component } from './loan-documentation-details-component-6.component';

describe('LoanDocumentationDetailsComponent6Component', () => {
  let component: LoanDocumentationDetailsComponent6Component;
  let fixture: ComponentFixture<LoanDocumentationDetailsComponent6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanDocumentationDetailsComponent6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanDocumentationDetailsComponent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
