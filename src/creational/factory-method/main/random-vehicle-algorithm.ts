import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import type { Vehicle } from "../vehicle/vehicle";
import { randomNumbers } from "../utils/utils";

export function randomCarAlgorithm(): Vehicle {
    const carFac = new CarFactory();
    const bicFac = new BicycleFactory();

    const c1 = carFac.getVehicle("Fusca");
    const c2 = carFac.getVehicle("Celta");

    const b1 = bicFac.getVehicle("Zion LM100");

    const cars = [c1, c2, b1];

    return cars[randomNumbers(cars.length)]!;
}