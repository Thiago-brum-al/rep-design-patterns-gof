interface PrototypeProtocol {
    clone(): PrototypeProtocol;
}

class Address implements PrototypeProtocol {
    constructor(
        public street: string,
        public number: number
    ){}

    clone(): Address {
        return new Address(this.street, this.number);
    }
}

class Person implements PrototypeProtocol {

    public address: Address[] = [];
    
    constructor(
        public name: string,
        public age: number
    ){}
    
    clone(): Person {
        const newObj = new Person(this.name, this.age);
        newObj.address = this.address.map(item => item.clone());
        return newObj;
    }

    addAddress(ad: Address): void{
        this.address.push(ad);
    }
}

const address = new Address("Av Brasil", 15);
const person1 = new Person("Thiago", 10);

person1.addAddress(address);

const person2 = person1.clone();

person2.name = "Joana";

console.log(person1);
console.log(person2);