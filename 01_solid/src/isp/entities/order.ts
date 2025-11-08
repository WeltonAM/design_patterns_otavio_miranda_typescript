import { OrderStatus } from "./interfaces/order-status";
import { Message } from "../services/message";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping-cart";
import { DefaultCustomer } from "./interfaces/default-customer";

export class Order {
  private _orderStatus: OrderStatus = "opened";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistency: Persistency,
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
