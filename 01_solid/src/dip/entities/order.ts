import { OrderStatus } from "./interfaces/order-status";
import { DefaultCustomer } from "./interfaces/default-customer";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessageProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = "opened";

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: DefaultCustomer
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
  }

  get customerName(): string {
    return this.customer.getName();
  }

  get customerIND(): string {
    return this.customer.getIND();
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("The cart is empty.");
    }

    this._orderStatus = "closed";
    this.message.send(
      `Your order with total ${this.cart.totalWithDiscount()} has been received.`
    );
    this.persistency.saveOrder();
    this.cart.clear();
    this.message.send(
      `Order customer: ${this.customerName} - ${this.customerIND}.`
    );
  }
}
