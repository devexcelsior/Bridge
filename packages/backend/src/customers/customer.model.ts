export class Customer {
  id?: number;
  personalInfo?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    mobilePhone?: string;
  };
  companyInfo?: {
    company?: string;
    title?: string;
    department?: string;
    website?: string;
    industry?: string;
    numberOfEmployees?: number;
    annualRevenue?: number;
  };
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  secondaryAddress?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  socialProfiles?: {
    twitter?: string;
    linkedIn?: string;
    facebook?: string;
    skype?: string;
  };
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
  lastContactedAt?: Date;
  preferredContactMethod?: string;
  leadSource?: string;
  assignedTo?: string;
  status?: string;
  rating?: string;
  secondaryEmail?: string;
}