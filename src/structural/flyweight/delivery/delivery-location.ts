import type { DeliveryFlyweightProtocol } from "./delivery-flyweight";
import type { DeliveryLocationData } from "./delivery-types";

export class DeliveryLocation implements DeliveryFlyweightProtocol {

    constructor(
        private readonly intrinsicState: DeliveryLocationData
    ){}

    delivery(name: string, number: string): void {
        console.log(`Entrega para ${name} - [${this.intrinsicState.street}/${this.intrinsicState.city} - ${number}]`);
    }
}