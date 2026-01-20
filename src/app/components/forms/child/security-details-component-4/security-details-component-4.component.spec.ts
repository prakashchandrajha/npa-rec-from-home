import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDetailsComponent4Component } from './security-details-component-4.component';

describe('SecurityDetailsComponent4Component', () => {
  let component: SecurityDetailsComponent4Component;
  let fixture: ComponentFixture<SecurityDetailsComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityDetailsComponent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityDetailsComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
