import { MyDatabaseClassic } from "./db/my-database-classic";
import { MyDatabaseModule } from "./db/my-database-module";
import { myDatabaseClassic, myDatabaseModule } from "./module_a";

const myDatabaseClassic2 = MyDatabaseClassic.instance;
myDatabaseClassic2.addUser({ name: "Welton 2", age: 36 });

const myDatabaseModule2 = MyDatabaseModule;
myDatabaseModule2.addUser({ name: "Chigolton 2", age: 52 });

myDatabaseClassic.showUsers();
myDatabaseModule.showUsers();

console.log(myDatabaseClassic === myDatabaseClassic2);
console.log(myDatabaseModule === myDatabaseModule2);
