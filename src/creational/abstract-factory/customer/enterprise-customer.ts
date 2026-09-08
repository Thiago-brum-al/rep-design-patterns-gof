import type { Customer } from "./interfaces/customer";

export class EnterpriseCustomer implements Customer {

    type: "enterprise" | "individual" = "enterprise";

    constructor(
        public name: string,
    ) {}

}