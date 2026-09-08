export abstract class ProductComponent {
    abstract getPrice(): number;
    add(product: ProductComponent): void {};
    remove(product: ProductComponent): void {};
}

export class ProductLeaf extends ProductComponent {
    constructor(
        public name: string,
        public price: number
    ){ super(); }

    getPrice(): number {
        return this.price;   
    }
    
}

export class ProductComposed extends ProductComponent {
    private readonly children: ProductComponent[] = [];

    add(...product: ProductComponent[]): void {
        product.map((p: ProductComponent, _) => this.children.push(p));
    }

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product);
        if(productIndex !== -1){
            this.children.splice(productIndex, 1);
            return;
        }
    }

    getPrice(): number {
        return this.children.reduce((acc, p) => acc+=p.getPrice(), 0);
    }
}

//Client side
const p1 = new ProductLeaf("Shirt", 40);
const p2 = new ProductLeaf("Iphone", 7000);
const p3 = new ProductLeaf("Peans", 60);

const p4 = new ProductLeaf("Tablet", 1000);
const p5 = new ProductLeaf("Bottle", 20);

const pBox1 = new ProductComposed();
const pBox2 = new ProductComposed();

pBox2.add(p4, p5);
pBox1.add(p1, p2, p3, pBox2);
console.log(pBox1);
console.log(pBox1.getPrice());