import { EnterpriseCustomerVehicleFactory } from "./factories/enterprise-customer-vehicle-factory";
import { IndividualCustomerVehicleFactory } from "./factories/individual-customer-vehicle-factory";

const enterpriseCustomerVehicleFactory = new EnterpriseCustomerVehicleFactory();
const individualCustomerVehicleFactory = new IndividualCustomerVehicleFactory();

const ec1 = enterpriseCustomerVehicleFactory.createVehicle("Fusca", "Thiago");
const ic1 = individualCustomerVehicleFactory.createVehicle("Celta", "Reginaldo");

ec1.pickUp();
ic1.pickUp();