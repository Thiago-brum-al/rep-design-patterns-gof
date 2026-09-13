import type { AppEntity } from "./app-entity";
import type { Mediator } from "./mediator";

export class Customer implements AppEntity {
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