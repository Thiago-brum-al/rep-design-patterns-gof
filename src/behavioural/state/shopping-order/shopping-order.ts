import { OrderPending } from "./order-pending";
import type { ShoppingOrderState } from "./shopping-order-state";

export class ShoppingOrder {
    private _state: ShoppingOrderState = new OrderPending(this);

    get state(): ShoppingOrderState {
        return this._state;
    };

    set state(state: ShoppingOrderState) {
        this._state = state;
    };

    get stateName(): string {
        return this._state.getName();
    };
    
    approvePayment(): void {
        this._state.approvePayment();
        console.log('[Current State] ->', this._state.getName());
    };

    rejectPayment(): void {
        this._state.rejectPayment();
        console.log('[Current State] ->', this._state.getName());
    };

    waitPayment(): void {
        this._state.waitPayment();
        console.log('[Current State] ->', this._state.getName());
    };

    shipOrder(): void {
        this._state.shipOrder();
        console.log('[Current State] ->', this._state.getName());
    };

};