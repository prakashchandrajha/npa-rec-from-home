import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestructuringDetailsComponent10Component } from './restructuring-details-component-10.component';

describe('RestructuringDetailsComponent10Component', () => {
  let component: RestructuringDetailsComponent10Component;
  let fixture: ComponentFixture<RestructuringDetailsComponent10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestructuringDetailsComponent10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestructuringDetailsComponent10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
