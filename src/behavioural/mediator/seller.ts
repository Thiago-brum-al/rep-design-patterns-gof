import type { Mediator } from "./mediator";
import type { SellerProduct } from "./seller-product";

export class Seller {
    private products: SellerProduct[] = [];
    private _mediator: Mediator | null = null;

    showProducts(): void {
        this.products.forEach(p => console.log(p));
    };

    addProducts(...sellerProducts: SellerProduct[]): void {
        sellerProducts.forEach(p => this.products.push(p));
    };

    set mediator(mediator: Mediator) {
        this._mediator = mediator;
    };

    sell(id: string): SellerProduct | void {
        const productIndex = this.products.findIndex(p => p.id === id);
        if(productIndex === -1) return;
        const product = this.products.splice(productIndex, 1)[0];
        return product;
    };

    viewProducts(): void {
        if(!this._mediator) return;
        this._mediator.showProducts();
    };

    buy(id: string): void {
        if(!this._mediator || !id) return;
        this._mediator.buy(id);
    };
}