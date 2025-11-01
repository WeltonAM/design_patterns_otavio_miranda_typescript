import { OrderStatus } from "./interfaces/order-status";
import { Message } from "../services/message";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping-cart";

export class Order {
  private _orderStatus: OrderStatus = "opened";

  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly persistency: Persistency
  ) {}

  get orderStatus(): Readonly<OrderStatus> {
    return this._orderStatus;
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
  }
}
