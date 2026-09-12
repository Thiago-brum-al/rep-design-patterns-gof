import { OrderApprove } from "./order-approve";
import { OrderReject } from "./order-reject";
import type { ShoppingOrder } from "./shopping-order";
import type { ShoppingOrderState } from "./shopping-order-state";

export class OrderPending implements ShoppingOrderState {

    private name: string = 'OrderPending';

    constructor(
        private readonly order: ShoppingOrder
    ){};

    getName(): string {
       return this.name; 
    };

    approvePayment(): void {
        this.order.state = new OrderApprove(this.order);
    };

    rejectPayment(): void {
        this.order.state = new OrderReject(this.order);
    };

    shipOrder(): void {
        console.log('The payment its pending...');
    };

    waitPayment(): void {
        console.log('The order its pending...');
    };
};