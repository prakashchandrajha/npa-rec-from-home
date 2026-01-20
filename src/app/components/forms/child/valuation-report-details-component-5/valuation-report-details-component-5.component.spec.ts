import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuationReportDetailsComponent5Component } from './valuation-report-details-component-5.component';

describe('ValuationReportDetailsComponent5Component', () => {
  let component: ValuationReportDetailsComponent5Component;
  let fixture: ComponentFixture<ValuationReportDetailsComponent5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuationReportDetailsComponent5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuationReportDetailsComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
