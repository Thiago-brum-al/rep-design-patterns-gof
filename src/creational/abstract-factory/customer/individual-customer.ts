import type { Customer } from "./interfaces/customer";

export class IndividualCustomer implements Customer {

    type: "enterprise" | "individual" = "individual";

    constructor(
        public name: string
    ) { }

}