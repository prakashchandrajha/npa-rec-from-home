import { Injectable } from '@angular/core';
import { BorrowerBasicDetailsComponentComponent } from '../components/forms/child/borrower-basic-details-component/borrower-basic-details-component.component';
import { BorrowerBoardMembersComponent2Component } from '../components/forms/child/borrower-board-members-component-2/borrower-board-members-component-2.component';
import { FacilitySanctionDetailsComponent3Component } from '../components/forms/child/facility-sanction-details-component-3/facility-sanction-details-component-3.component';
import { SecurityDetailsComponent4Component } from '../components/forms/child/security-details-component-4/security-details-component-4.component';
import { ValuationReportDetailsComponent5Component } from '../components/forms/child/valuation-report-details-component-5/valuation-report-details-component-5.component';
import { LoanDocumentationDetailsComponent6Component } from '../components/forms/child/loan-documentation-details-component-6/loan-documentation-details-component-6.component';
import { ReleaseDetailsComponent7Component } from '../components/forms/child/release-details-component-7/release-details-component-7.component';
import { PostDatedChequeDetailsComponent8Component } from '../components/forms/child/post-dated-cheque-details-component-8/post-dated-cheque-details-component-8.component';
import { OriginalRepaymentScheduleComponent9Component } from '../components/forms/child/original-repayment-schedule-component-9/original-repayment-schedule-component-9.component';
import { RestructuringDetailsComponent10Component } from '../components/forms/child/restructuring-details-component-10/restructuring-details-component-10.component';
import { RevisedRepaymentScheduleComponent11Component } from '../components/forms/child/revised-repayment-schedule-component-11/revised-repayment-schedule-component-11.component';
import { DivisionRemarksComponent12Component } from '../components/forms/child/division-remarks-component-12/division-remarks-component-12.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoadService {

  constructor() { }

  getFormSections() {
    return [
      { 
        title: 'Basic Details of Borrower', 
        component: BorrowerBasicDetailsComponentComponent 
      },
      { 
        title: 'Contact & Board Members', 
        component: BorrowerBoardMembersComponent2Component 
      },
      { 
        title: 'Facility Sanctioned', 
        component: FacilitySanctionDetailsComponent3Component 
      },
      { 
        title: 'Security Details', 
        component: SecurityDetailsComponent4Component 
      },
      { 
        title: 'Valuation & Title Search Report', 
        component: ValuationReportDetailsComponent5Component 
      },
      { 
        title: 'Loan Documentation Details', 
        component: LoanDocumentationDetailsComponent6Component 
      },
      { 
        title: 'Release Details', 
        component: ReleaseDetailsComponent7Component 
      },
      { 
        title: 'Post Dated Cheques (PDC)', 
        component: PostDatedChequeDetailsComponent8Component 
      },
      { 
        title: 'Original Repayment Schedule', 
        component: OriginalRepaymentScheduleComponent9Component 
      },
      { 
        title: 'Restructuring Details', 
        component: RestructuringDetailsComponent10Component 
      },
      { 
        title: 'Revised Repayment Schedule', 
        component: RevisedRepaymentScheduleComponent11Component 
      },
      { 
        title: 'Division Remarks', 
        component: DivisionRemarksComponent12Component 
      }
    ];
  }
}
