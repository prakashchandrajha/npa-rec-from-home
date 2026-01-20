import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerBoardMembersComponent2Component } from './borrower-board-members-component-2.component';

describe('BorrowerBoardMembersComponent2Component', () => {
  let component: BorrowerBoardMembersComponent2Component;
  let fixture: ComponentFixture<BorrowerBoardMembersComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorrowerBoardMembersComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowerBoardMembersComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
