import type { Mediator } from "./mediator";

export class Customer {
    constructor(
        private mediator: Mediator
    ){};

    viewProducts(): void {
        this.mediator.showProducts();
    };

    buy(id: string): void {
        this.mediator.buy(id);
    };
};