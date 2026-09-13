import { BaseBudgetHandler } from "./base-budget-handler";
import type { CustomerBudget } from "./customer-budget";

export class CEOBudgetHandler extends BaseBudgetHandler {

    handle(budget: CustomerBudget): CustomerBudget {
        console.log('The CEO approved this budget');
        budget.approved = true;
        return budget;
    }

};