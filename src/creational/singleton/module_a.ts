import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseModule } from "./db/my-database-module";
import { MyDatabaseFunction } from "./db/my-database-function";

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'Luiz', age: 56 });
myDatabaseClassic.add({ name: 'Maria', age: 24 });
myDatabaseClassic.add({ name: 'Carlos', age: 32 });

const myDatabaseModule = MyDatabaseModule;
myDatabaseModule.add({ name: 'Luiz', age: 56 });
myDatabaseModule.add({ name: 'Maria', age: 24 });
myDatabaseModule.add({ name: 'Carlos', age: 32 });

const myDatabaseFunction = MyDatabaseModule;
myDatabaseFunction.add({ name: 'Luiz', age: 56 });
myDatabaseFunction.add({ name: 'Maria', age: 24 });
myDatabaseFunction.add({ name: 'Carlos', age: 32 });

export { myDatabaseClassic, myDatabaseModule, myDatabaseFunction };