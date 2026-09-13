import { BaseBudgetHandler } from "./base-budget-handler";
import type { CustomerBudget } from "./customer-budget";

export class ManagerBudgetHandler extends BaseBudgetHandler {

    handle(budget: CustomerBudget): CustomerBudget {
        
        if(budget.total <= 5000) {
            console.log('The manager approved this budget');
            budget.approved = true;
            return budget;
        };

        return super.handle(budget);
    }

};