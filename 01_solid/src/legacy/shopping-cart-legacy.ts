type CartItem = { name: string; price: number };

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: "opened" | "closed" = "opened";

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): Readonly<"opened" | "closed"> {
    return this._orderStatus;
  }

  total(): number {
    return Number(
      this._items.reduce((total, item) => total + item.price, 0).toFixed(2)
    );
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log(message);
  }

  saveOrder(): void {
    console.log("Order saved.");
  }

  clear(): void {
    this._items.length = 0;
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("The cart is empty.");
    }

    this._orderStatus = "closed";
    this.sendMessage(
      `Your order with total ${this.total()} has been received.`
    );
    this.saveOrder();
    this.clear();
  }
}

const cart = new ShoppingCartLegacy();
cart.addItem({ name: "Item 1", price: 10.59 });
cart.addItem({ name: "Item 2", price: 20 });

console.log("CART: ", cart.items);
console.log("Total:", cart.total());

cart.removeItem(0);
console.log("CART: ", cart.items);
// not allowed
// cart[0].name = "New Item";

console.log("----------------");
cart.clear();

const cart2 = new ShoppingCartLegacy();
cart2.addItem({ name: "Item 1", price: 9.69 });
cart2.addItem({ name: "Item 2", price: 4.99 });
console.log("CART2: ", cart2.items);

cart2.checkout();
console.log("CART2: ", cart2.items);
console.log("CART2 STATUS:", cart2.orderStatus);
