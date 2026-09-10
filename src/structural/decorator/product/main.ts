import { ProductCustomizationDecorator } from "./product-customization-decorator";
import { ProductStampDecorator } from "./product-stamp-decorator";
import { TShirt } from "./t-shirt";

const tShirt = new TShirt("t-shirt", 40.00);
const stampTShirt = new ProductStampDecorator(tShirt);
const stampFrontAndBack = new ProductStampDecorator(stampTShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getPrice());
console.log(stampTShirt.getPrice());
console.log(stampFrontAndBack.getPrice());
console.log(customizedTShirt.getPrice());