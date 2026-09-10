import type { ProductProtocol } from "./product-protocol";

export class TShirt implements ProductProtocol {

    constructor(
        public name: string,
        public price: number
    ){}

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}