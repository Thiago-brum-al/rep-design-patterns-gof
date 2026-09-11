import { ECommerceShoppingCart } from "./shopping-cart/ecommerce-shopping-cart";
import { DefaultDiscount, NewDiscount } from "./shopping-cart/strategies/discount";

const cart = new ECommerceShoppingCart();
cart.discount = new DefaultDiscount();
cart.discount = new NewDiscount();
cart.addProduct({ name: "shirt", price: 50 }, { name: "scarf", price: 50 }, { name: "scarf", price: 50 }, { name: "scarf", price: 50 });
console.log(cart.totalWithDiscount);