import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDatedChequeDetailsComponent8Component } from './post-dated-cheque-details-component-8.component';

describe('PostDatedChequeDetailsComponent8Component', () => {
  let component: PostDatedChequeDetailsComponent8Component;
  let fixture: ComponentFixture<PostDatedChequeDetailsComponent8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDatedChequeDetailsComponent8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDatedChequeDetailsComponent8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
