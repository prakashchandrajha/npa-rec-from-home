import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerBasicDetailsComponentComponent } from './borrower-basic-details-component.component';

describe('BorrowerBasicDetailsComponentComponent', () => {
  let component: BorrowerBasicDetailsComponentComponent;
  let fixture: ComponentFixture<BorrowerBasicDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowerBasicDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowerBasicDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
