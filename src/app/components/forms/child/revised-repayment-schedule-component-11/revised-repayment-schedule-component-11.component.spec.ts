import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisedRepaymentScheduleComponent11Component } from './revised-repayment-schedule-component-11.component';

describe('RevisedRepaymentScheduleComponent11Component', () => {
  let component: RevisedRepaymentScheduleComponent11Component;
  let fixture: ComponentFixture<RevisedRepaymentScheduleComponent11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisedRepaymentScheduleComponent11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisedRepaymentScheduleComponent11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
