import { IndividualCustomer } from "../customer/individual-customer";
import type { Customer } from "../customer/interfaces/customer";
import { IndividualCar } from "../vehicle/individual-car";
import type { Vehicle } from "../vehicle/interfaces/vehicle";
import type { CustomerVehicleFactory } from "./customer-vehicle-factory";

export class IndividualCustomerVehicleFactory implements CustomerVehicleFactory {

    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName);
    }

    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new IndividualCar(vehicleName, customer);
    }

}