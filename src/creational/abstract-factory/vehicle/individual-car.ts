import type { Customer } from "../customer/interfaces/customer";
import type { Vehicle } from "./interfaces/vehicle";

export class IndividualCar implements Vehicle {
    constructor(
        public name: string,
        private readonly customer: Customer
    ) { }

    pickUp(): void {
        console.log(`[Individual] - ${this.name} está buscando ${this.customer.name} | Customer type: ${this.customer.type}`);
    }
}