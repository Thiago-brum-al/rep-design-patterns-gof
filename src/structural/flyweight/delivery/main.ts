import { deliveryContext } from "./delivery-context";
import { DeliveryFactory } from "./delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, "Thiago", "20A", "Rua Brasil", "SP");
deliveryContext(factory, "Luiza", "33A", "Rua Brasil", "SP");
deliveryContext(factory, "Roberta", "15A", "Rua México", "SP");
console.log(factory.getLocations());