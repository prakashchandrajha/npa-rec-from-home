export interface BoardMember {
  name: string;
  designation: string;
  contactDetails: string;
  address: string;
}

export interface BorrowerBasicDetails {
  divisionAndRegionalOffice: string;
  accountName: string;
  npaClassificationDate: string;
  businessActivity: string;
  boardMembers: BoardMember[];
  registeredAddress: string;
  corporateOfficeAddress: string;
  factoryAddress: string;
  factoryRunningCondition: 'yes' | 'no' | '';
  factoryNotRunningSince: string;
  factoryLeasedOut: 'yes' | 'no' | '';
  lesseeName: string;
  lesseeContactDetails: string;
}