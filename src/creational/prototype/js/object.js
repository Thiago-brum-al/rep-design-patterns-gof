const personPrototype = {
    firstName: "Thiago",
    lastName: "Brum",
    age: 30,
    fullName(){
        return this.firstName + " " + this.lastName;
    }
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = "Joana";

console.log(anotherPerson);
console.log(anotherPerson.fullName());