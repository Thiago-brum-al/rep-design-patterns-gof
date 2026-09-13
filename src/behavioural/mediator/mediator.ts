import type { Seller } from "./seller";
import type { SellerProduct } from "./seller-product";

export class Mediator {
    private sellers: Seller[] = [];

    addSeller(...sellers: Seller[]): void {
        sellers.forEach((seller) => {
            this.sellers.push(seller);
            seller.mediator = this;
        });
    };

    buy(id: string): SellerProduct | void {
        let product;
        for(let i = 0; i < this.sellers.length; i++){
            product = this.sellers[i]?.sell(id);
            if(product){
                console.log(`Here it is ${product.name}`);
                return;
            };
        };

        console.log("Sorry... We couldn't find your product");
    };

    showProducts(): void {
        this.sellers.forEach((seller) => seller.showProducts());
    }
};