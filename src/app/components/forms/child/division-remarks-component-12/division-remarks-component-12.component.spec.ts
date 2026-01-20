import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionRemarksComponent12Component } from './division-remarks-component-12.component';

describe('DivisionRemarksComponent12Component', () => {
  let component: DivisionRemarksComponent12Component;
  let fixture: ComponentFixture<DivisionRemarksComponent12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DivisionRemarksComponent12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionRemarksComponent12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
