import { Message } from "./services/message";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";

const cart = new ShoppingCart();
const message = new Message();
const persistency = new Persistency();
const order = new Order(cart, message, persistency);
cart.addItem(new Product("Item 1", 10.59));
cart.addItem(new Product("Item 2", 20));

console.log("CART: ", cart.items);
console.log("Total:", cart.total());
order.checkout();

cart.removeItem(0);
console.log("CART: ", cart.items);
// not allowed
// cart[0].name = "New Item";

console.log("----------------");
cart.clear();

const cart2 = new ShoppingCart();
cart2.addItem(new Product("Item 1", 5.99));
cart2.addItem(new Product("Item 2", 15.99));
console.log("CART2: ", cart2.items);
console.log("CART2 STATUS:", order.orderStatus);

console.log("CART2: ", cart2.items);
console.log("CART2 STATUS:", order.orderStatus);
