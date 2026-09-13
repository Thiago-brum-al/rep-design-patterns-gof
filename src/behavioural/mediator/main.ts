import { Customer } from "./customer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();
const customer = new Customer(mediator);

seller1.addProducts({ id: '1', name: 'Shirt', price: 40 }, { id: '2', name: 'Pen', price: 9 });
seller2.addProducts({ id: '1', name: 'Scarf', price: 20 }, { id: '2', name: 'Peans', price: 55 });

mediator.addSeller(seller1, seller2);

mediator.showProducts();
seller2.viewProducts();
seller2.buy('2');
seller2.buy('1');
mediator.showProducts();