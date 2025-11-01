import { Message } from "./services/message";
import { Order } from "./entities/order";
import { Persistency } from "./services/persistency";
import { Product } from "./entities/product";
import { ShoppingCart } from "./entities/shopping-cart";
import { PercentageDiscount } from "./entities/discount";

const fiftyPercentDiscount = new PercentageDiscount(0.5);

const cart = new ShoppingCart(fiftyPercentDiscount);

const message = new Message();
const persistency = new Persistency();

const order = new Order(cart, message, persistency);
cart.addItem(new Product("Item 1", 10.59));
cart.addItem(new Product("Item 2", 20));
console.log("CART: ", cart.items);
console.log("Total:", cart.totalWithDiscount());
console.log("CART CHECKOUT:", order.checkout());

cart.removeItem(0);
console.log("CART: ", cart.items);

console.log("----------------");
cart.clear();

const cart2 = new ShoppingCart();
cart2.addItem(new Product("Item 1", 5.99));
cart2.addItem(new Product("Item 2", 15.99));
const order2 = new Order(cart2, message, persistency);
console.log("CART2: ", cart2.items);
console.log("CART2 STATUS:", order2.orderStatus);

order2.checkout();
console.log("CART2: ", cart2.items);
console.log("CART2 STATUS:", order2.orderStatus);
