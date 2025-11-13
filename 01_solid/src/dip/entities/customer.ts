// Importing specific interfaces instead of a general one
// The Interface Segregation Principle (ISP) states that no class should be forced
// to implement methods or properties it does not use.
// Therefore, instead of having a single large "CustomerProtocol",
// we define smaller, more specific interfaces for each customer type.

// import { CustomerProtocol } from "./interfaces/customer-protocol";
import { DefaultCustomer } from "./interfaces/default-customer";
import { EnterpriseCustomerProtocol } from "./interfaces/enterpriseCustomerProtocol";
import { IndividualCustomerProtocol } from "./interfaces/individualCustomerProtocol";

// The IndividualCustomer class implements only the IndividualCustomerProtocol.
// This ensures that it depends only on what it actually needs (firstName, lastName, cpf, etc.),
// and not on unnecessary properties such as 'cnpj' that are irrelevant to individuals.

// export class InividualCustomer implements CustomerProtocol {
export class InividualCustomer
  implements IndividualCustomerProtocol, DefaultCustomer
{
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  // cnpj: string;

  constructor(firstName: string, lastName: string, email: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.email = email;
    // this.cnpj = cnpj;

    // By removing unused properties (like 'cnpj'),
    // this class respects the Interface Segregation Principle.
    // It avoids depending on or implementing members it doesn't need.
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getIND(): string {
    return this.cpf;
  }
}

// The EnterpriseCustomer class implements only the EnterpriseCustomerProtocol.
// Unlike individuals, enterprises have 'cnpj' and 'socialName', but no 'cpf'.
// This separation of concerns ensures that each class implements only the
// relevant properties and behaviors for its context.

// export class EnterpriseCustomer implements CustomerProtocol {
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, DefaultCustomer
{
  socialName: string;
  email: string;
  cnpj: string;
  // cpf: string;

  constructor(socialName: string, email: string, cnpj: string) {
    this.socialName = socialName;
    this.email = email;
    this.cnpj = cnpj;
    // this.cpf = cpf;

    // By excluding unnecessary fields such as 'cpf', we maintain
    // clean, purpose-specific interfaces and classes — the essence of ISP.
  }

  getName(): string {
    return this.socialName;
  }

  getIND(): string {
    return this.cnpj;
  }
}
