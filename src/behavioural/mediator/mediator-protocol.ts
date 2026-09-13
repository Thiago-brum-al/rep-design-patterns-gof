import type { Seller } from "./seller";
import type { SellerProduct } from "./seller-product";

export interface MediatorProtocol {
    addSeller(...sellers: Seller[]): void;
    buy(id: string): SellerProduct | void;
    showProducts(): void;
};