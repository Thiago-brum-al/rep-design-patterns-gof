import type { Customer } from "../customer/interfaces/customer";
import type { Vehicle } from "../vehicle/interfaces/vehicle";

export interface CustomerVehicleFactory {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
} 