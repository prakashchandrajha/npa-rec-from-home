import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseDetailsComponent7Component } from './release-details-component-7.component';

describe('ReleaseDetailsComponent7Component', () => {
  let component: ReleaseDetailsComponent7Component;
  let fixture: ComponentFixture<ReleaseDetailsComponent7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleaseDetailsComponent7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseDetailsComponent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
