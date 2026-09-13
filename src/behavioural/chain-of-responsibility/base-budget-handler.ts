import type { CustomerBudget } from "./customer-budget";

export abstract class BaseBudgetHandler {

    protected nextHandler: BaseBudgetHandler | null = null;
    
    handle(budget: CustomerBudget): CustomerBudget {
        if(this.nextHandler) return this.nextHandler.handle(budget);
        return budget;
    };

    setNextHandler(handler: BaseBudgetHandler) {
        this.nextHandler = handler;
        return handler;
    };
};