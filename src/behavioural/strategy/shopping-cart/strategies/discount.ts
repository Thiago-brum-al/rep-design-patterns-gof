import type { ECommerceShoppingCart } from "../ecommerce-shopping-cart";

export class DiscountStrategy {
    protected discount: number = 0;
    getDiscount(cart: ECommerceShoppingCart): number {
        return cart.total;
    };
} 

export class DefaultDiscount extends DiscountStrategy {
    protected discount: number = 0;
    getDiscount(cart: ECommerceShoppingCart): number {
        const total = cart.total;
        if(total >= 100 && total < 200){
            this.discount = 10;
        } else if (total >= 200 && total < 300){
            this.discount = 20;
        } else if (total >= 300){
            this.discount = 30;
        };
        return total - total * (this.discount/100);
    };
}

export class NewDiscount extends DiscountStrategy {
    protected discount: number = 0;
    getDiscount(cart: ECommerceShoppingCart): number {
        const total = cart.total;
        if(total >= 150){
            this.discount = 5;
        };
        return total - total * (this.discount/100);
    };
}