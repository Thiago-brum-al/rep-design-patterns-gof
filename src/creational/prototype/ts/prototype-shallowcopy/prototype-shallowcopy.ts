interface PrototypeProtocol {
    clone(): PrototypeProtocol;
}

class Address {
    constructor(
        public street: string,
        public number: number
    ){}
}

class Person implements PrototypeProtocol {

    public address: Address[] = [];
    
    constructor(
        public name: string,
        public age: number
    ){}
    
    clone(): this {
        const newObj = Object.create(this);
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

console.log(person1);
console.log(person2.address);