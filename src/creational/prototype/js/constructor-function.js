function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const personPrototype = {
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

Person.prototype = Object.create(personPrototype);

function SubPerson(firstName, lastName, age){
    Person.call(this, firstName, lastName);
    this.fromSubClass = "Hi";
}

SubPerson.prototype = Object.create(Person.prototype);

const person = new Person("Luiz", "Miranda", 30);
const subPerson = new SubPerson("Thiago", "Almeida", 20); 

console.log(person);
console.log(subPerson);