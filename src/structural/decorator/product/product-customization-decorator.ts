import { ProductDecorator } from "./product-decorator";

export class ProductCustomizationDecorator extends ProductDecorator {
    getName(): string {
        return `[Customization] - ${this.product.getName()}`;
    }
    getPrice(): number {
        return this.product.getPrice() + 50;
    }
}