// warning: this interface is a violation of the interface segregation principle
export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  cnpj: string;
}
