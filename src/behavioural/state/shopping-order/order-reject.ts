import type { ShoppingOrder } from "./shopping-order";
import type { ShoppingOrderState } from "./shopping-order-state";

export class OrderReject implements ShoppingOrderState {

    private name: string = 'OrderReject';

    constructor(
        private readonly order: ShoppingOrder
    ){};

    getName(): string {
       return this.name; 
    };

    approvePayment(): void {
        console.log('Sorry. The order was rejected...');
    };

    rejectPayment(): void {
        console.log('Sorry. The order was rejected...');
    };

    shipOrder(): void {
        console.log('Sorry. The order was rejected...');
    };

    waitPayment(): void {
        console.log('Sorry. The order was rejected...');
    };
};