import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitySanctionDetailsComponent3Component } from './facility-sanction-details-component-3.component';

describe('FacilitySanctionDetailsComponent3Component', () => {
  let component: FacilitySanctionDetailsComponent3Component;
  let fixture: ComponentFixture<FacilitySanctionDetailsComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilitySanctionDetailsComponent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilitySanctionDetailsComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
