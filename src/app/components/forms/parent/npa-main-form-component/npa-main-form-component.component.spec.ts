import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpaMainFormComponentComponent } from './npa-main-form-component.component';

describe('NpaMainFormComponentComponent', () => {
  let component: NpaMainFormComponentComponent;
  let fixture: ComponentFixture<NpaMainFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NpaMainFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpaMainFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
