// packages/backend/src/customers/customers.service.ts
import { Injectable } from '@nestjs/common';
import { Customer } from './customer.model';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return [
      {
        "id": 1,
        "personalInfo": {
          "firstName": "John",
          "lastName": "Doe",
          "email": "john.doe@example.com",
          "phone": "123-456-7890",
          "mobilePhone": "098-765-4321"
        },
        "companyInfo": {
          "company": "Acme Corp",
          "title": "CEO",
          "department": "Management",
          "website": "www.acme.com",
          "industry": "Manufacturing",
          "numberOfEmployees": 1000,
          "annualRevenue": 1000000
        },
        "address": {
          "street": "123 Main St",
          "city": "Anytown",
          "state": "CA",
          "zip": "12345",
          "country": "USA"
        },
        "secondaryAddress": {
          "street": "456 Oak St",
          "city": "Othertown",
          "state": "NY",
          "zip": "67890",
          "country": "USA"
        },
        "socialProfiles": {
          "twitter": "johndoe",
          "linkedIn": "johndoe",
          "facebook": "johndoe",
          "skype": "johndoe"
        },
        "notes": "Important customer",
        "preferredContactMethod": "email",
        "leadSource": "website",
        "assignedTo": "sales1",
        "status": "active",
        "rating": "high",
        "secondaryEmail": "john.doe@other.com"
      },
      {
          "id": 2,
          "personalInfo": {
              "firstName": "Jane",
              "lastName": "Doe",
              "email": "jane.doe@example.com",
              "phone": "234-567-8901",
              "mobilePhone": "109-876-5432"
          },
          "companyInfo": {
              "company": "Beta Corp",
              "title": "CFO",
              "department": "Finance",
              "website": "www.beta.com",
              "industry": "Technology",
              "numberOfEmployees": 500,
              "annualRevenue": 500000
          },
          "address": {
              "street": "789 Pine St",
              "city": "Sometown",
              "state": "TX",
              "zip": "23456",
              "country": "USA"
          },
          "secondaryAddress": {
              "street": "321 Elm St",
              "city": "Anothertown",
              "state": "FL",
              "zip": "78901",
              "country": "USA"
          },
          "socialProfiles": {
              "twitter": "janedoe",
              "linkedIn": "janedoe",
              "facebook": "janedoe",
              "skype": "janedoe"
          },
          "notes": "High value customer",
          "preferredContactMethod": "phone",
          "leadSource": "referral",
          "assignedTo": "sales2",
          "status": "active",
          "rating": "medium",
          "secondaryEmail": "jane.doe@other.com"
      },
      {
          "id": 3,
          "personalInfo": {
              "firstName": "Bob",
              "lastName": "Smith",
              "email": "bob.smith@example.com",
              "phone": "345-678-9012",
              "mobilePhone": "210-987-6543"
          },
          "companyInfo": {
              "company": "Gamma Corp",
              "title": "CTO",
              "department": "Technology",
              "website": "www.gamma.com",
              "industry": "Software",
              "numberOfEmployees": 200,
              "annualRevenue": 200000
          },
          "address": {
              "street": "654 Cherry St",
              "city": "Thistown",
              "state": "WA",
              "zip": "34567",
              "country": "USA"
          },
          "secondaryAddress": {
              "street": "987 Maple St",
              "city": "Thatstown",
              "state": "OR",
              "zip": "89012",
              "country": "USA"
          },
          "socialProfiles": {
              "twitter": "bobsmith",
              "linkedIn": "bobsmith",
              "facebook": "bobsmith",
              "skype": "bobsmith"
          },
          "notes": "Potential upsell opportunity",
          "preferredContactMethod": "email",
          "leadSource": "conference",
          "assignedTo": "sales3",
          "status": "active",
          "rating": "low",
          "secondaryEmail": "bob.smith@other.com"
      },
      {
          "id": 4,
          "personalInfo": {
              "firstName": "Alice",
              "lastName": "Johnson",
              "email": "alice.johnson@example.com",
              "phone": "456-789-0123",
              "mobilePhone": "321-098-7654"
          },
          "companyInfo": {
              "company": "Delta Corp",
              "title": "COO",
              "department": "Operations",
              "website": "www.delta.com",
              "industry": "Logistics",
              "numberOfEmployees": 300,
              "annualRevenue": 300000
          },
          "address": {
              "street": "321 Walnut St",
              "city": "Thattown",
              "state": "IL",
              "zip": "45678",
              "country": "USA"
          },
          "secondaryAddress": {
              "street": "654 Birch St",
              "city": "Thosetown",
              "state": "MI",
              "zip": "90123",
              "country": "USA"
          },
          "socialProfiles": {
              "twitter": "alicejohnson",
              "linkedIn": "alicejohnson",
              "facebook": "alicejohnson",
              "skype": "alicejohnson"
          },
          "notes": "Long-term customer",
          "preferredContactMethod": "phone",
          "leadSource": "trade show",
          "assignedTo": "sales4",
          "status": "active",
          "rating": "medium",
          "secondaryEmail": "alice.johnson@other.com"
      },
      {
          "id": 5,
          "personalInfo": {
              "firstName": "Charlie",
              "lastName": "Brown",
              "email": "charlie.brown@example.com",
              "phone": "567-890-1234",
              "mobilePhone": "432-109-8765"
          },
          "companyInfo": {
              "company": "Epsilon Corp",
              "title": "CMO",
              "department": "Marketing",
              "website": "www.epsilon.com",
              "industry": "Advertising",
              "numberOfEmployees": 400,
              "annualRevenue": 400000
          },
          "address": {
              "street": "987 Cedar St",
              "city": "Thosetown",
              "state": "OH",
              "zip": "56789",
              "country": "USA"
          },
          "secondaryAddress": {
              "street": "321 Pine St",
              "city": "Thistown",
              "state": "PA",
              "zip": "01234",
              "country": "USA"
          },
          "socialProfiles": {
              "twitter": "charliebrown",
              "linkedIn": "charliebrown",
              "facebook": "charliebrown",
              "skype": "charliebrown"
          },
          "notes": "New customer",
          "preferredContactMethod": "email",
          "leadSource": "online ad",
          "assignedTo": "sales5",
          "status": "active",
          "rating": "high",
          "secondaryEmail": "charlie.brown@other.com"
      }
    ];
  }

  insertCustomer(customerData: Partial<Customer>): { id: number } {
    // Mock data
    const generatedId = 123;
    return { id: generatedId };
  }

  // Other service methods...
}