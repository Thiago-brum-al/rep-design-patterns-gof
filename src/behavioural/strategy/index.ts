export interface ECommerceProductProtocol {
    name: string;
    price: number;
};

export class ECommerceShoppingCart {
    private readonly _products: ECommerceProductProtocol[] = [];
    private discount: number = 0;

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
        const total = this.total;
        if(total >= 100 && total < 200){
            this.discount = 0.1;
        };

        if(total >= 200 && total < 300){
            this.discount = 0.2;
        };

        if(total >= 300){
            this.discount = 0.3;
        };

        return total - (total * this.discount);
    };
};

const cart = new ECommerceShoppingCart();
cart.addProduct({ name: "shirt", price: 50 }, { name: "scarf", price: 50 });
console.log(cart.totalWithDiscount);