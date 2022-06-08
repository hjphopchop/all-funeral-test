export interface Company {
  businessEntity: string;
  contactId?: string;
  contract: Contract;
  createdAt?: string;
  id?: string;
  name: string;
  shortName: string;
  type: string[];
  updatedAt?: string;
}

export interface Contract {
  no: string;
  issue_date: string;
}
