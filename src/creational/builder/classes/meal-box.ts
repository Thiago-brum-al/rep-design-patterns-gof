import type { MealCompositeProtocol } from "../interfaces/meal-composite-protocol";

export class MealBox implements MealCompositeProtocol {

    private readonly _children: MealCompositeProtocol[] = [];

    getPrice(): number {
        return this._children.reduce((acc, curr) => acc+=curr.getPrice(),0);
    }

    add(...meal: MealCompositeProtocol[]): void {
        meal.forEach(m => this._children.push(m));
    }
};