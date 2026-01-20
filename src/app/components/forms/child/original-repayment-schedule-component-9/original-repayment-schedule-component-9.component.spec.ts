import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalRepaymentScheduleComponent9Component } from './original-repayment-schedule-component-9.component';

describe('OriginalRepaymentScheduleComponent9Component', () => {
  let component: OriginalRepaymentScheduleComponent9Component;
  let fixture: ComponentFixture<OriginalRepaymentScheduleComponent9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginalRepaymentScheduleComponent9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginalRepaymentScheduleComponent9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
