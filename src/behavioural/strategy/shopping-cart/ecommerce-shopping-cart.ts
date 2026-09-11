import type { ECommerceProductProtocol } from "./ecommerce-product-protocol";
import { DiscountStrategy } from "./strategies/discount";

export class ECommerceShoppingCart {
    private readonly _products: ECommerceProductProtocol[] = [];
    private _discountStrategy: DiscountStrategy = new DiscountStrategy();

    addProduct(...products: ECommerceProductProtocol[]){
        products.forEach((product) => this._products.push(product));
    };

    get products(): ECommerceProductProtocol[] {
        return this._products;
    };

    get total(): number {
        return this._products.reduce((acc, curr) => acc += curr.price, 0);
    };

    get totalWithDiscount(): number {
        return this._discountStrategy.getDiscount(this);
    };

    set discount(discount: DiscountStrategy) {
        this._discountStrategy = discount;
    }
};