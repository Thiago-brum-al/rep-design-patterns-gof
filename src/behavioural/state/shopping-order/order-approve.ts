import { OrderPending } from "./order-pending";
import { OrderReject } from "./order-reject";
import type { ShoppingOrder } from "./shopping-order";
import type { ShoppingOrderState } from "./shopping-order-state";

export class OrderApprove implements ShoppingOrderState {

    private name: string = 'OrderApprove';

    constructor(
        private readonly order: ShoppingOrder
    ){};

    getName(): string {
       return this.name; 
    };

    approvePayment(): void {
        console.log('The order payment is being processed...');
    };

    rejectPayment(): void {
        this.order.state = new OrderReject(this.order);
    };

    shipOrder(): void {
        console.log('Sending order to the customer...');
    };

    waitPayment(): void {
        this.order.state = new OrderPending(this.order);
    };
};