import { randomCarAlgorithm } from "./main/random-vehicle-algorithm";

const customers = ['Ana', 'Joana', 'Helena', 'João'];

for(let i = 0; i < customers.length; i++){
    const car = randomCarAlgorithm();
    car.pickUp(customers[i]!);
    car.stop();
    console.log("---");
}