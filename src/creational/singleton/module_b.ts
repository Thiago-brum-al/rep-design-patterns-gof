import { myDatabaseClassic, myDatabaseModule, myDatabaseFunction } from "./module_a";

myDatabaseClassic.add({ name: 'Roberto', age: 56 });
myDatabaseClassic.add({ name: 'Joana', age: 24 });
myDatabaseClassic.add({ name: 'Luiza', age: 32 });
myDatabaseClassic.show();

myDatabaseModule.add({ name: 'Roberto', age: 56 });
myDatabaseModule.add({ name: 'Joana', age: 24 });
myDatabaseModule.add({ name: 'Luiza', age: 32 });
myDatabaseModule.show();


myDatabaseFunction.add({ name: 'Roberto', age: 56 });
myDatabaseFunction.add({ name: 'Joana', age: 24 });
myDatabaseFunction.add({ name: 'Luiza', age: 32 });
myDatabaseFunction.show();